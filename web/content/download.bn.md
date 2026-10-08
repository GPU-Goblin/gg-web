+++
title = "GPU Goblin ডাউনলোড করুন"
description = "আপনার কম্পিউটার গবেষণায় ধার দিতে GPU Goblin অ্যাপ্লিকেশন ডাউনলোড করুন: সিস্টেম ট্রেসহ Linux ডেস্কটপ অ্যাপ, সার্ভারের জন্য কনসোল মোড।"
template = "download.html"
[extra]
lead = "আপনার কম্পিউটার ধার দেওয়ার জন্য একটিই অ্যাপ্লিকেশন: এটি আপনাকে সাইন ইন করায় এবং আপনাকে বিরতি দিতে, সময় ও সীমা বেছে নিতে দেয়।"
items = [
  { name = "Linux ডেস্কটপ", platform = "Linux x86-64", status = "ready", file = "install.sh", text = "সিস্টেম ট্রে আইকনসহ অ্যাপ্লিকেশন: সাইন ইন করুন, বেছে নিন কী ধার দেবেন এবং কখন, দেখুন আপনার মেশিন কী করছে। Ubuntu, Debian, Fedora এবং systemd-যুক্ত অন্যান্য ডিস্ট্রিবিউশন।" },
  { name = "Linux সার্ভার (কনসোল)", platform = "Linux x86-64", status = "ready", file = "install.sh", text = "সার্ভার ও দূরবর্তী মেশিনের জন্য টার্মিনালে একই অ্যাপ্লিকেশন: কমান্ড লাইন থেকে অবস্থা, বিরতি, সময়সূচি ও সীমা, প্রতিটি গ্রাফিক্স কার্ড আলাদাভাবে গণনা করে।" },
  { name = "Windows", platform = "Windows 10/11", status = "windows", file = "GPUGoblinSetup.exe", when = "খুব শিগগিরই।", text = "Windows 10 ও 11-এর জন্য একই অ্যাপ্লিকেশন, একই সুরক্ষাসহ।", text_win = "Windows 10 ও 11 (64-বিট)-এর জন্য সিস্টেম ট্রে আইকনসহ অ্যাপ্লিকেশন: সাইন ইন করুন, বেছে নিন কী ধার দেবেন এবং কখন, দেখুন আপনার মেশিন কী করছে।" },
  { name = "Android", platform = "Android 12+", status = "planned", when = "পরিকল্পিত: আগে ফোনে পরিমাপ।", text = "ফোন যখন Wi-Fi-তে চার্জ হচ্ছে এবং স্ক্রিন বন্ধ, তখন তার গ্রাফিক্স প্রসেসর ধার দেওয়া।" },
]
+++

{{ <notify lang={lang} win={config.extra.windows_available} /> }}

## যা ডাউনলোড করছেন তা যাচাই করুন

{{ <os k="dl_verify" lang={lang} win={config.extra.windows_available} /> }}

হাতে করে একটি রিলিজ যাচাই করতে:

```sh
curl -fsSLO https://grid.gpugoblin.com/releases/latest/SHA256SUMS
curl -fsSLO https://grid.gpugoblin.com/releases/latest/SHA256SUMS.sshsig
ssh-keygen -Y verify -f allowed_signers -I release@gpu-goblin -n gg-release \
  -s SHA256SUMS.sshsig < SHA256SUMS
sha256sum --ignore-missing -c SHA256SUMS
```

`allowed_signers` ফাইলে রিলিজের পাবলিক কী থাকে। এর ফিঙ্গারপ্রিন্ট প্রথম রিলিজের সঙ্গে এই পৃষ্ঠায়
প্রকাশিত হবে; অন্য কোনো মাধ্যমে আপনাকে দেওয়া ফিঙ্গারপ্রিন্টের সঙ্গে এটি মিলিয়ে নিন।

## প্রয়োজনীয়তা

- {{ <os k="dl_req_os" lang={lang} win={config.extra.windows_available} /> }}
- গ্রাফিক্স কার্ডের জন্য: একটি Vulkan ড্রাইভার (NVIDIA, AMD, Intel), অথবা CUDA-র জন্য NVIDIA ড্রাইভার;
- কয়েক গিগাবাইট খালি ডিস্ক।

সোর্স কোড PolyForm Noncommercial লাইসেন্সের অধীনে [GitHub](https://github.com/GPU-Goblin)-এ পাওয়া যায়।
