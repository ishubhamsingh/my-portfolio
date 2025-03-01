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
  },
  {
    name: "Tecno Phantom V Fold 5G",
    specs: "Dimensity 9000 Pro, 12 GB RAM, 256 GB, Android 14, HiOS 14.5.0",
    description:
      "My secondary work phone that I use for testing, love the foldable displays and cameras, hate HiOS",
    type: UsesTypes.Mobile,
    category: [UsesCategories.Work],
  },
  {
    name: "iPhone 12",
    specs: "A14 Bionic, 128 GB, iOS 18.3.1",
    description:
      "This is my primary phone, using since 4 years, still running great",
    type: UsesTypes.Mobile,
    category: [UsesCategories.Personal],
  },
  {
    name: "Samsung S21 FE 5G",
    specs: "Exynos 2100, 128 GB, Android 14, One UI 6.1",
    description: "My secondary phone, love Samsung but hate Exynos",
    type: UsesTypes.Mobile,
    category: [UsesCategories.Personal],
  },
  {
    name: "iPad Air 3rd Gen",
    specs: "A12 Bionic, 64 GB, WiFi, iPad OS 18.3",
    description: "Use it for media consumption and casual reading",
    type: UsesTypes.Mobile,
    category: [UsesCategories.Personal],
  },
  {
    name: "Apple Watch Series 6",
    specs: "44 mm, GPS, Watch OS 11.3",
    description:
      "Perfect iPhone companion, use it for sleep & fitness tracking",
    type: UsesTypes.Mobile,
    category: [UsesCategories.Personal],
  },
  {
    name: "Dell G15, 2018, 15.6 inch",
    specs:
      "i7 8th Gen, 16 GB RAM, 512 nvme SSD, 1 TB SATA SSD, Geforce GTX 1060, Endeavour OS",
    description:
      "Never buying a gaming laptop again, use it for hosting home media server",
    type: UsesTypes.Computer,
    category: [UsesCategories.Personal],
  },
  {
    name: "Mac Mini, 2024",
    specs: "M4 Pro, 24 GB RAM, 512 GB SSD, Mac OS Sequoia",
    description:
      "A cute little beast, use it for personal projects and casual browsing",
    type: UsesTypes.Computer,
    category: [UsesCategories.Personal],
  },
  {
    name: "Keychron K2",
    description: "I enjoy typing on these, use it with wooden palm rest",
    type: UsesTypes.Peripheral,
    category: [UsesCategories.Work, UsesCategories.Personal],
  },
  {
    name: "Logitech MX Master 3",
    description: "Great mouse for productivity and comfort",
    type: UsesTypes.Peripheral,
    category: [UsesCategories.Work, UsesCategories.Personal],
  },
  {
    name: "Apple AirPods Pro",
    description: "Use it for comfort and ease, mostly for calls",
    type: UsesTypes.Audio,
    category: [UsesCategories.Work, UsesCategories.Personal],
  },
  {
    name: "Sony WH-1000XM4",
    description:
      "Use it to isolate myself from the world, perfect for listening to music",
    type: UsesTypes.Audio,
    category: [UsesCategories.Personal],
  },
  {
    name: "Sony PlayStation 5",
    description: "Perfect for my casual gaming, expanded with 2 TB SSD",
    type: UsesTypes.Entertainment,
    category: [UsesCategories.Personal],
  },
  {
    name: "LG Ultrafine Display",
    specs: "32UN880, 32 inch, 4K, 60 Hz, HDR10, USB-C, Ergo arm",
    description:
      "Amazing 4K display, use it for work, gaming and watching content, perfect all rounder",
    type: UsesTypes.Entertainment,
    category: [UsesCategories.Work, UsesCategories.Personal],
  },
  {
    name: "Apple TV 4K, 2022",
    specs: "A15 Bionic, 128 GB, Wifi + Ethernet, tvOS 18.2.1",
    description: "Perfect TV box, smooth and lag-free, plus Apple ecosystem",
    type: UsesTypes.Entertainment,
    category: [UsesCategories.Personal],
  },
  {
    name: "Edifier R1855DB",
    description:
      "Amazing sounding bookshelf speakers that I use while gaming and watching content",
    type: UsesTypes.Audio,
    category: [UsesCategories.Work, UsesCategories.Personal],
  },
  {
    name: "Audio Array AA-21",
    description:
      "A pair of desk-mounted stands for my speakers, height and angle adjustable",
    type: UsesTypes.Utility,
    category: [UsesCategories.Work, UsesCategories.Personal],
  },
  {
    name: "Ikea Utespelare",
    description: "A huge desk with ample space for my gadgets and work",
    type: UsesTypes.Utility,
    category: [UsesCategories.Work, UsesCategories.Personal],
  },
  {
    name: "Ikea Helmer",
    description: "A drawer unit for keeping my stuff beside my desk",
    type: UsesTypes.Utility,
    category: [UsesCategories.Work, UsesCategories.Personal],
  },
  {
    name: "Ikea Skurup",
    description: "A lamp mounted on my desk, keeps my workspace bright",
    type: UsesTypes.Utility,
    category: [UsesCategories.Work, UsesCategories.Personal],
  },
  {
    name: "Ikea Lanespelare",
    description: "A desk-mounted mug holder, keeps my desk clean",
    type: UsesTypes.Utility,
    category: [UsesCategories.Work, UsesCategories.Personal],
  },
  {
    name: "Green Soul Monster Ultimate",
    description:
      "A very comfortable gaming/working chair that I use for long hours",
    type: UsesTypes.Utility,
    category: [UsesCategories.Work, UsesCategories.Personal],
  },
  {
    name: "Ikea Kullen",
    description: "A bedside table for keeping my stuff",
    type: UsesTypes.Utility,
    category: [UsesCategories.Personal],
  },
  {
    name: "Ikea Lampan",
    description: "A warm tone table lamp for my bedside",
    type: UsesTypes.Utility,
    category: [UsesCategories.Personal],
  },
  {
    name: "Narwal Freo X Plus",
    description: "My companion who loves cleaning :)",
    type: UsesTypes.Utility,
    category: [UsesCategories.Personal],
  },
  {
    name: "Android Studio",
    description: "Pretty much my bread and butter",
    type: UsesTypes.Software,
    category: [UsesCategories.Work],
  },
  {
    name: "VsCode",
    description: "Casual web development and fun side projects",
    type: UsesTypes.Software,
    category: [UsesCategories.Work],
  },
  {
    name: "Postman",
    description: "API Testing, Development",
    type: UsesTypes.Software,
    category: [UsesCategories.Work],
  },
  {
    name: "Maccy",
    description: "Makes me professional Copy-Paster",
    type: UsesTypes.Software,
    category: [UsesCategories.Work, UsesCategories.Personal],
  },
  {
    name: "Better Display",
    description: "Manages External Display",
    type: UsesTypes.Software,
    category: [UsesCategories.Work, UsesCategories.Personal],
  },
  {
    name: "Amphetamine",
    description: "Keeps Mac Awake",
    type: UsesTypes.Software,
    category: [UsesCategories.Work, UsesCategories.Personal],
  },
  {
    name: "Spotify",
    description: "Radio, Someone still loves you",
    type: UsesTypes.Software,
    category: [UsesCategories.Personal],
  },
  {
    name: "iTerm2",
    description: "Because CLI is fun",
    type: UsesTypes.Software,
    category: [UsesCategories.Work, UsesCategories.Personal],
  },
  {
    name: "Oh My Zsh",
    description: "All things Zsh",
    type: UsesTypes.Software,
    category: [UsesCategories.Work, UsesCategories.Personal],
  },
];

export default uses;
export { UsesTypes, UsesCategories };
