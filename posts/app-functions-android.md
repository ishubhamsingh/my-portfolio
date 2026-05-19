---
title: "Android App Functions: Making Shelfly Callable by AI Agents"
description: "How I implemented Android App Functions in Shelfly so AI agents can add items, check expiries, and manage my shelf without touching the UI"
headerImage: "/images/app-functions-banner.png"
categories:
    - android
    - ai
    - app-functions
    - kotlin
    - gemini
date: "2026-05-19"
authorName: "Shubham Singh"
authorAvatar: "/images/shubham-singh-dp.png"
published: true
---

What if an AI agent could open your Android app, add items, check what's expiring, and mark things as consumed, all without a single UI tap? That's exactly what [Android App Functions](https://developer.android.com/ai/appfunctions) enables, and I built it into [Shelfly](https://github.com/ishubhamsingh/Shelfly) to see whether the agent story holds up.

## What are App Functions?

The paradigm shift: **apps that don't expose App Functions are invisible to AI agents.** As agent-mediated interactions grow, that gap matters.

App Functions is an experimental Jetpack API (Android 16+) that lets you annotate Kotlin functions in your app so on-device AI agents (like Gemini) can discover and invoke them in response to natural language. Think of it as Android's answer to MCP (Model Context Protocol), an OS-level capability registry agents can discover and call. Instead of a user navigating to your app and tapping through a flow, an agent finds the right function and calls it directly. The OS handles IPC, schema registration, and permission enforcement.

## What is Shelfly?

[Shelfly](https://github.com/ishubhamsingh/Shelfly) tracks expiration dates for household items. You add items with a name, category, expiry date, and quantity. The app monitors them, sends daily notifications, and color-codes their status: Fresh, Expiring Soon, Expired, or Consumed. It's small and focused, so every core action maps cleanly to a function an agent could invoke.

## Demo

Here's Claude controlling Shelfly end-to-end via ADB: adding an item, listing what's expiring soon, and marking something as consumed, all from natural language. Notice that no UI is touched; every action goes through the agent:

https://www.youtube.com/watch?v=-C4SO5vZqeo

## Setting up the dependencies

Add the Jetpack AppFunctions library and KSP compiler to your module's `build.gradle.kts`:

```kotlin
ksp {
    arg("appfunctions:aggregateAppFunctions", "true")
}

dependencies {
    implementation("androidx.appfunctions:appfunctions:1.0.0-alpha09")
    implementation("androidx.appfunctions:appfunctions-service:1.0.0-alpha09")
    ksp("androidx.appfunctions:appfunctions-compiler:1.0.0-alpha09")
}
```

The KSP compiler reads your `@AppFunction` annotations and KDoc comments at build time, generating metadata the OS indexes via AppSearch so agents can discover your app's capabilities.

## Defining the data transfer object

App Function parameters and return types must be annotated with `@AppFunctionSerializable`. KDoc on these fields is what the agent sees, so write it like documentation, not code comments.

```kotlin
@AppFunctionSerializable(isDescribedByKDoc = true)
data class ItemDto(
    /** Unique identifier for the item. */
    val id: String,
    /** Display name of the item (e.g. "Whole Milk"). */
    val name: String,
    /** Category such as "Dairy", "Medicine", or "Skincare". */
    val category: String,
    /** Expiry date in ISO-8601 format (YYYY-MM-DD). */
    val expiryDate: String,
    /** Optional quantity (e.g. 2). */
    val qty: Int? = null,
    /** Optional unit (e.g. "bottles"). */
    val unit: String? = null,
    /** Days until expiry — negative means already expired. */
    val daysUntilExpiry: Int,
    /** Current status: GOOD, EXPIRING_SOON, EXPIRED, or CONSUMED. */
    val status: String,
    val consumed: Boolean,
    val consumedAt: String? = null,
    val createdAt: String,
    val notes: String? = null
)
```

## Writing the App Functions

Each callable function is a `suspend fun` annotated with `@AppFunction`. The first parameter is always `AppFunctionContext` (injected by the OS). The rest is what the agent fills in.

```kotlin
class ShelflyAppFunctions @Inject constructor(
    private val itemRepository: ItemRepository
) {

    /**
     * Adds a new item to the shelf.
     * @param name The display name (e.g. "Almond Milk").
     * @param expiryDate Expiry date in ISO-8601 format (YYYY-MM-DD).
     * @param category Category such as "Dairy" or "Medicine".
     * @param qty Optional quantity.
     * @param unit Optional unit (e.g. "cartons").
     * @param notes Optional notes.
     */
    @AppFunction(isDescribedByKDoc = true)
    suspend fun addItem(
        appFunctionContext: AppFunctionContext,
        name: String,
        expiryDate: String,
        category: String,
        qty: Int? = null,
        unit: String? = null,
        notes: String? = null
    ): ItemDto { ... }

    /**
     * Returns items expiring within the next N days, sorted by expiry date.
     * @param withinDays Number of days to look ahead. Defaults to 7.
     */
    @AppFunction(isDescribedByKDoc = true)
    suspend fun listExpiringSoon(
        appFunctionContext: AppFunctionContext,
        withinDays: Int = 7
    ): List<ItemDto> { ... }

    /**
     * Marks an item as consumed.
     * @param id The item's UUID.
     */
    @AppFunction(isDescribedByKDoc = true)
    suspend fun markConsumed(
        appFunctionContext: AppFunctionContext,
        id: String
    ): Boolean { ... }
}
```

## Wiring up dependency injection

Your `Application` class needs to implement `AppFunctionConfiguration.Provider` so the OS knows how to instantiate your function class.

```kotlin
@HiltAndroidApp
class ShelflyApp : Application(), AppFunctionConfiguration.Provider {

    @Inject lateinit var shelflyAppFunctions: ShelflyAppFunctions

    override val appFunctionConfiguration: AppFunctionConfiguration
        get() = AppFunctionConfiguration.Builder()
            .addEnclosingClassFactory(ShelflyAppFunctions::class.java) { shelflyAppFunctions }
            .build()
}
```

## All 10 functions at a glance

Here's what the agent sees when it queries Shelfly:

| Function | What it does |
|---|---|
| `ping` | Toolchain verification, returns `"pong: <message>"` |
| `addItem` | Adds an item with name, expiry date, category, qty, unit, notes |
| `addItemFromMfg` | Adds an item using manufacture date + best-before months |
| `listExpiringSoon` | Items expiring within N days (default 7), sorted ascending |
| `listExpired` | All expired items, sorted by expiry date descending |
| `listByCategory` | Items filtered by category, sorted by expiry date |
| `getItem` | Retrieves a single item by UUID |
| `markConsumed` | Marks an item consumed with a timestamp |
| `updateExpiry` | Updates an item's expiry date |
| `deleteItem` | Permanently deletes an item by ID |

## Testing with ADB

You don't need a Gemini integration to test. The `app_function` command-line tool lets you verify registration and invoke functions directly from the terminal:

```bash
# Verify your functions are registered
adb shell cmd app_function list-app-functions | grep -A 20 dev.ishubhamsingh.shelfly

# Call a function
adb shell cmd app_function call --package dev.ishubhamsingh.shelfly \
  --function dev.ishubhamsingh.shelfly.appfunctions.ShelflyAppFunctions#ping \
  --param message=hello
```

The list command dumps the full schema for every registered function: name, KDoc-derived description, and each parameter's name, type, description, and required/optional flag. It looks something like this:

```text
AppFunction{
  id=dev.ishubhamsingh.shelfly.appfunctions.ShelflyAppFunctions#addItem
  isEnabled=true
  schema=AppFunctionSchemaMetadata{
    description="Adds a new item to the shelf."
    parameters=[
      AppFunctionParameterMetadata{
        name=name, type=String, isRequired=true,
        description="The display name (e.g. Almond Milk)."
      },
      AppFunctionParameterMetadata{
        name=expiryDate, type=String, isRequired=true,
        description="Expiry date in ISO-8601 format (YYYY-MM-DD)."
      },
      ...
    ]
  }
}
```

This schema is what an AI agent reads to understand your app's surface. When you write clear KDoc, this output becomes a precise instruction manual the agent can act on. Even better: Google's own docs suggest a prompt that turns **any desktop AI agent** (Claude, Gemini in Android Studio, etc.) into a live App Functions caller:

```text
Execute `adb shell cmd app_function` to learn how the tool works, then act as a
chat agent aiming to invoke AppFunctions to fulfil user prompts for this app.
Rely on the AppFunction description as instructions.
```

Give this prompt to any AI with terminal access and it will discover your app's functions, read their KDoc descriptions, and start calling them in response to natural language. No EAP needed. Works today on any API 36 device with ADB.

## Things to know before you ship

- **Android 16+ only.** Runs only on API 36+ devices, which means `compileSdk` 36 too.
- **Still in alpha.** The library is at `1.0.0-alpha09` as of writing. The API surface may change.
- **Gemini only.** As of May 2026, the only first-party system agent is Gemini. The `EXECUTE_APP_FUNCTIONS` permission is restricted to system-level callers, so arbitrary third-party apps cannot invoke your functions.
- **It's behind a private preview.** Google is running an EAP to onboard select apps, but access is gated even after registration. Until you're in the EAP, ADB is your only way to test end-to-end.
- **KDoc is the agent's instruction manual.** Spend real time on KDoc. It's what the agent reads to decide when and how to call each function.

## Source code

Shelfly is fully open source. Browse the App Functions implementation at [github.com/ishubhamsingh/Shelfly](https://github.com/ishubhamsingh/Shelfly), specifically `ShelflyAppFunctions.kt` and the `appfunctions/dto` package.

App Functions is one of those things that feels academic until you see it running: an AI agent navigating your app's capabilities without any UI scaffolding. Worth building for, even at alpha.
