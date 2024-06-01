---
title: "Migrate to K2 in Compose Multiplatform"
description: "Let's see how to migrate to the new Kotlin v2.0, on a Compose Multiplatform project"
headerImage: "https://blog.jetbrains.com/wp-content/uploads/2024/05/Social_Share_1280x720-2x-1.png"
categories:
    - kotlin
    - android
    - compose-multiplatform
date: "2024-06-02"
authorName: "Shubham Singh"
authorAvatar: "/images/shubham-singh-dp.png"
published: true
---

JetBrains has released a stable version of the new Kotlin Compiler v2.0, also known as K2. This release features a complete rewrite of the compiler frontend from scratch, resulting in faster code compilation and smarter code analysis. Additionally, it introduces first-party support for Compose Multiplatform. As a result, the Jetpack Compose compiler will now ship along with Kotlin.

Let's now explore the process of migrating to K2 within our Compose Multiplatform project.

## 1. Update plugins version

We need to update the following plugins to v2.0.0 :

- org.jetbrains.kotlin.multiplatform
- org.jetbrains.kotlin.native.cocoapods
- org.jetbrains.kotlin.plugin.serialization

Considering the project uses **version catalog**, our `libs.versions.toml` will look like this :

```toml
[versions]

kotlin = "2.0.0"

[plugins]

multiplatform = { id = "org.jetbrains.kotlin.multiplatform", version.ref = "kotlin" }
cocoapods = { id = "org.jetbrains.kotlin.native.cocoapods", version.ref = "kotlin" }
kotlinx-serialization = { id = "org.jetbrains.kotlin.plugin.serialization", version.ref = "kotlin" }
```

## 2. Add Compose compiler

We need to add Compose compiler plugin to our project, for which we need to do following changes :

```toml
// libs.versions.toml

[plugins]

...
compose-compiler = { id = "org.jetbrains.kotlin.plugin.compose", version.ref = "kotlin" }
...
```

```kotlin
// build.gradle.kts

plugins {
    ...
    alias(libs.plugins.compose.compiler).apply(false)
    ...
}
```

```kotlin
// composeApp/build.gradle.kts

plugins {
    ...
    alias(libs.plugins.compose.compiler)
    ...
}

// enable strong skipping mode - optional
composeCompiler { enableStrongSkippingMode = true }
```

## 3. Update gitignore

The K2 compiler adds a new folder `.kotlin` to cache klibs, which we need not commit, hence we need to add it to `.gitignore`

```.gitignore
...
.kotlin
...
```

After doing the above changes our project is now ready to use the goodness of K2 compiler. For reference here is my commit for [K2 Migration](https://github.com/ishubhamsingh/Splashy/commit/2f4bdc1d75b6884419381cde3d5ce36431d74d5b) .



