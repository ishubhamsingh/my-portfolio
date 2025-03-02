enum UsesTypes {
  Computer = "Computers 💻",
  Mobile = "Mobile Devices 📱",
  Audio = "Audio Devices 🎧",
  Peripheral = "Peripherals ⌨️",
  Entertainment = "Entertainment 🎮",
  Utility = "Utilities 🛠️",
  Software = "Softwares 💾",
}

enum UsesCategories {
  Work = "Work",
  Personal = "Personal",
}

const uses = [
  {
    name: "MacBook Pro, 16 inch, 2023",
    specs: "M3 Pro, 36 GB RAM, 1 TB SSD, Mac OS Sequoia",
    description:
      "This is my work laptop, use it mostly for android development",
    type: UsesTypes.Computer,
    category: [UsesCategories.Work],
    link: "https://www.apple.com/macbook-pro-16/",
  },
  {
    name: "Tecno Phantom V Fold 5G",
    specs: "Dimensity 9000 Pro, 12 GB RAM, 256 GB, Android 14, HiOS 14.5.0",
    description:
      "My secondary work phone that I use for testing, love the foldable displays and cameras, hate HiOS",
    type: UsesTypes.Mobile,
    category: [UsesCategories.Work],
    link: "https://www.amazon.in/Phantom-Storage-AMOLED-Display-Processor/dp/B0BZCG8FNL",
  },
  {
    name: "iPhone 12",
    specs: "A14 Bionic, 128 GB, iOS 18.3.1",
    description:
      "This is my primary phone, using since 4 years, still running great",
    type: UsesTypes.Mobile,
    category: [UsesCategories.Personal],
    link: "https://www.flipkart.com/apple-iphone-12-blue-128-gb/p/itm02853ae92e90a",
  },
  {
    name: "Samsung S21 FE 5G",
    specs: "Exynos 2100, 128 GB, Android 14, One UI 6.1",
    description: "My secondary phone, love Samsung but hate Exynos",
    type: UsesTypes.Mobile,
    category: [UsesCategories.Personal],
    link: "https://www.flipkart.com/samsung-galaxy-s21-fe-5g-graphite-128-gb/p/itm7be0f72fff180",
  },
  {
    name: "iPad Air 3rd Gen",
    specs: "A12 Bionic, 64 GB, WiFi, iPad OS 18.3",
    description: "Use it for media consumption and casual reading",
    type: UsesTypes.Mobile,
    category: [UsesCategories.Personal],
    link: "https://www.amazon.in/Apple-iPad-Air-10-5-inch-Wi-Fi-64GB/dp/B07PY3WB42",
  },
  {
    name: "Apple Watch Series 6",
    specs: "44 mm, GPS, Watch OS 11.3",
    description:
      "Perfect iPhone companion, use it for sleep & fitness tracking",
    type: UsesTypes.Mobile,
    category: [UsesCategories.Personal],
    link: "https://www.amazon.in/New-Apple-Watch-GPS-44mm-Aluminium/dp/B08J69JQV2",
  },
  {
    name: "Dell G15 7588, 2018, 15.6 inch",
    specs:
      "i7 8th Gen, 16 GB RAM, 512 nvme SSD, 1 TB SATA SSD, Geforce GTX 1060, Endeavour OS",
    description:
      "Never buying a gaming laptop again, use it for hosting home media server",
    type: UsesTypes.Computer,
    category: [UsesCategories.Personal],
    link: "https://www.amazon.in/Dell-G7-7588-15-6-inch-i7-8750H/dp/B07FZP2S3T",
  },
  {
    name: "Mac Mini, 2024",
    specs: "M4 Pro, 24 GB RAM, 512 GB SSD, Mac OS Sequoia",
    description:
      "A cute little beast, use it for personal projects and casual browsing",
    type: UsesTypes.Computer,
    category: [UsesCategories.Personal],
    link: "https://www.amazon.in/Apple-Desktop-Computer-12%E2%80%91core-16%E2%80%91core/dp/B0DLBVTM3Y",
  },
  {
    name: "Keychron K2",
    description: "I enjoy typing on these, use it with wooden palm rest",
    type: UsesTypes.Peripheral,
    category: [UsesCategories.Work, UsesCategories.Personal],
    link: "https://www.amazon.in/Keychron-Wireless-Bluetooth-Mechanical-Keyboard/dp/B07Y9Y69N7",
  },
  {
    name: "Logitech MX Master 3",
    description: "Great mouse for productivity and comfort",
    type: UsesTypes.Peripheral,
    category: [UsesCategories.Work, UsesCategories.Personal],
    link: "https://www.flipkart.com/logitech-mx-master-3-ultrafast-scrolling-ergonomic-4000-dpi-wireless-hybrid-mouse/p/itm47d093e35a83b",
  },
  {
    name: "Apple AirPods Pro",
    description: "Use it for comfort and ease, mostly for calls",
    type: UsesTypes.Audio,
    category: [UsesCategories.Work, UsesCategories.Personal],
    link: "https://www.flipkart.com/apple-airpods-pro-magsafe-charging-case-bluetooth-headset/p/itm0847811966368",
  },
  {
    name: "Sony WH-1000XM4",
    description:
      "Use it to isolate myself from the world, perfect for listening to music",
    type: UsesTypes.Audio,
    category: [UsesCategories.Personal],
    link: "https://www.sony.co.in/electronics/headband-headphones/wh-1000xm4",
  },
  {
    name: "Sony PlayStation 5",
    description: "Perfect for my casual gaming, expanded with 2 TB SSD",
    type: UsesTypes.Entertainment,
    category: [UsesCategories.Personal],
    link: "https://www.playstation.com/en-in/ps5/",
  },
  {
    name: "LG Ultrafine Display",
    specs: "32UN880, 32 inch, 4K, 60 Hz, HDR10, USB-C, Ergo arm",
    description:
      "Amazing 4K display, use it for work, gaming and watching content, perfect all rounder",
    type: UsesTypes.Entertainment,
    category: [UsesCategories.Work, UsesCategories.Personal],
    link: "https://www.lg.com/in/monitors/ergo-monitors/32un880-b/",
  },
  {
    name: "Apple TV 4K, 2022",
    specs: "A15 Bionic, 128 GB, Wifi + Ethernet, tvOS 18.2.1",
    description: "Perfect TV box, smooth and lag-free, plus Apple ecosystem",
    type: UsesTypes.Entertainment,
    category: [UsesCategories.Personal],
    link: "https://www.apple.com/in/shop/buy-tv/apple-tv-4k/128gb",
  },
  {
    name: "Edifier R1855DB",
    description:
      "Amazing sounding bookshelf speakers that I use while gaming and watching content",
    type: UsesTypes.Audio,
    category: [UsesCategories.Work, UsesCategories.Personal],
    link: "https://www.amazon.in/Edifier-R1855DB-Multimedia-Bookshelf-Bluetooth/dp/B08GJCLKW3",
  },
  {
    name: "Audio Array AA-21",
    description:
      "A pair of desk-mounted stands for my speakers, height and angle adjustable",
    type: UsesTypes.Utility,
    category: [UsesCategories.Work, UsesCategories.Personal],
    link: "https://www.amazon.in/Audio-Array-AA-21-Adjustable-Black/dp/B0CF5TCQKL?th=1",
  },
  {
    name: "Ikea Utespelare",
    description: "A huge desk with ample space for my gadgets and work",
    type: UsesTypes.Utility,
    category: [UsesCategories.Work, UsesCategories.Personal],
    link: "https://www.ikea.com/in/en/p/utespelare-gaming-desk-black-40500350/",
  },
  {
    name: "Ikea Helmer",
    description: "A drawer unit for keeping my stuff beside my desk",
    type: UsesTypes.Utility,
    category: [UsesCategories.Work, UsesCategories.Personal],
    link: "https://www.ikea.com/in/en/p/helmer-drawer-unit-on-castors-black-00341971/#content",
  },
  {
    name: "Ikea Skurup",
    description: "A lamp mounted on my desk, keeps my workspace bright",
    type: UsesTypes.Utility,
    category: [UsesCategories.Work, UsesCategories.Personal],
    link: "https://www.ikea.com/in/en/p/skurup-work-wall-lamp-black-60471144/",
  },
  {
    name: "Ikea Lanespelare",
    description: "A desk-mounted mug holder, keeps my desk clean",
    type: UsesTypes.Utility,
    category: [UsesCategories.Work, UsesCategories.Personal],
    link: "https://www.ikea.com/in/en/p/lanespelare-mug-holder-black-40504065/",
  },
  {
    name: "Green Soul Monster Ultimate",
    description:
      "A very comfortable gaming/working chair that I use for long hours",
    type: UsesTypes.Utility,
    category: [UsesCategories.Work, UsesCategories.Personal],
    link: "https://www.greensoul.online/products/monster-ultimate-t-gaming-chair",
  },
  {
    name: "Ikea Kullen",
    description: "A bedside table for keeping my stuff",
    type: UsesTypes.Utility,
    category: [UsesCategories.Personal],
    link: "https://www.ikea.com/in/en/p/kullen-chest-of-2-drawers-black-brown-30355706/#content",
  },
  {
    name: "Ikea Lampan",
    description: "A warm tone table lamp for my bedside",
    type: UsesTypes.Utility,
    category: [UsesCategories.Personal],
    link: "https://www.ikea.com/in/en/p/lampan-table-lamp-white-70314851/",
  },
  {
    name: "Narwal Freo X Plus",
    description: "My companion who loves cleaning :)",
    type: UsesTypes.Utility,
    category: [UsesCategories.Personal],
    link: "https://www.amazon.in/NARWAL-Freo-Plus-2024-Model/dp/B0D5BK6Y38",
  },
  {
    name: "Android Studio",
    description: "Pretty much my bread and butter",
    type: UsesTypes.Software,
    category: [UsesCategories.Work],
    link: "https://developer.android.com/studio",
  },
  {
    name: "Vscode",
    description: "Casual web development and fun side projects",
    type: UsesTypes.Software,
    category: [UsesCategories.Work],
    link: "https://code.visualstudio.com/",
  },
  {
    name: "Postman",
    description: "API Testing, Development",
    type: UsesTypes.Software,
    category: [UsesCategories.Work],
    link: "https://www.postman.com/downloads/",
  },
  {
    name: "Maccy",
    description: "Makes me professional Copy-Paster",
    type: UsesTypes.Software,
    category: [UsesCategories.Work, UsesCategories.Personal],
    link: "https://maccy.app/",
  },
  {
    name: "Better Display",
    description: "Manages External Display",
    type: UsesTypes.Software,
    category: [UsesCategories.Work, UsesCategories.Personal],
    link: "https://github.com/waydabber/BetterDisplay",
  },
  {
    name: "Amphetamine",
    description: "Keeps Mac Awake",
    type: UsesTypes.Software,
    category: [UsesCategories.Work, UsesCategories.Personal],
    link: "https://apps.apple.com/us/app/amphetamine/id937984704?mt=12",
  },
  {
    name: "Spotify",
    description: "Radio, Someone still loves you",
    type: UsesTypes.Software,
    category: [UsesCategories.Personal],
    link: "https://open.spotify.com/download",
  },
  {
    name: "iTerm2",
    description: "Because CLI is fun",
    type: UsesTypes.Software,
    category: [UsesCategories.Work, UsesCategories.Personal],
    link: "https://iterm2.com/",
  },
  {
    name: "Oh My Zsh",
    description: "All things Zsh",
    type: UsesTypes.Software,
    category: [UsesCategories.Work, UsesCategories.Personal],
    link: "https://ohmyz.sh/",
  },
];

export default uses;
export { UsesTypes, UsesCategories };
