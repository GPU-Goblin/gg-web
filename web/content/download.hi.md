+++
title = "GPU Goblin डाउनलोड करें"
description = "अपना कंप्यूटर शोध को उधार देने के लिए GPU Goblin एप्लिकेशन डाउनलोड करें: सिस्टम ट्रे वाला Linux डेस्कटॉप ऐप, सर्वरों के लिए कंसोल मोड।"
template = "download.html"
[extra]
lead = "अपना कंप्यूटर उधार देने के लिए एक एप्लिकेशन: यह आपको साइन इन कराता है और आपको रोकने, अपने घंटे और अपनी सीमाएँ चुनने देता है।"
items = [
  { name = "Linux डेस्कटॉप", platform = "Linux x86-64", status = "ready", file = "install.sh", text = "सिस्टम ट्रे आइकन वाला एप्लिकेशन: साइन इन करें, चुनें कि क्या उधार देना है और कब, देखें कि आपकी मशीन क्या कर रही है। Ubuntu, Debian, Fedora और systemd वाले अन्य डिस्ट्रीब्यूशन।" },
  { name = "Linux सर्वर (कंसोल)", platform = "Linux x86-64", status = "ready", file = "install.sh", text = "सर्वरों और दूरस्थ मशीनों के लिए टर्मिनल में वही एप्लिकेशन: कमांड लाइन से स्थिति, रोकना, समय-सारणी और सीमाएँ, हर ग्राफ़िक्स कार्ड अलग से गणना करता है।" },
  { name = "Windows", platform = "Windows 10/11", status = "windows", file = "GPUGoblinSetup.exe", when = "बहुत जल्द।", text = "Windows 10 और 11 के लिए वही एप्लिकेशन, वही सुरक्षा के साथ।", text_win = "Windows 10 और 11 (64-बिट) के लिए सिस्टम ट्रे आइकन वाला एप्लिकेशन: साइन इन करें, चुनें कि क्या उधार देना है और कब, देखें कि आपकी मशीन क्या कर रही है।" },
  { name = "Android", platform = "Android 12+", status = "planned", when = "योजना में: पहले फ़ोनों पर माप।", text = "फ़ोन जब Wi-Fi पर चार्ज हो रहा हो और स्क्रीन बंद हो, तब उसका ग्राफ़िक्स प्रोसेसर उधार देना।" },
]
+++

{{ <notify lang={lang} win={config.extra.windows_available} /> }}

## जो आप डाउनलोड करते हैं उसकी जाँच करें

{{ <os k="dl_verify" lang={lang} win={config.extra.windows_available} /> }}

किसी रिलीज़ की हाथ से जाँच करने के लिए:

```sh
curl -fsSLO https://grid.gpugoblin.com/releases/latest/SHA256SUMS
curl -fsSLO https://grid.gpugoblin.com/releases/latest/SHA256SUMS.sshsig
ssh-keygen -Y verify -f allowed_signers -I release@gpu-goblin -n gg-release \
  -s SHA256SUMS.sshsig < SHA256SUMS
sha256sum --ignore-missing -c SHA256SUMS
```

इस पंक्ति को, जो रिलीज़ की सार्वजनिक कुंजी है, `allowed_signers` नाम की फ़ाइल में सहेजें:

```
release@gpu-goblin namespaces="gg-release" ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIEVp1adRtKn6v2iU8hG/jSMsIALjae/LkpY3AODuih9v
```

इसका फ़िंगरप्रिंट `SHA256:673XukOsx9kY85im+4qIA2IRxZU3+bEFVaD2VZwyBcM` है; इसे उस फ़िंगरप्रिंट से
मिलाएँ जो आपको किसी दूसरे माध्यम से मिला हो।

## आवश्यकताएँ

- {{ <os k="dl_req_os" lang={lang} win={config.extra.windows_available} /> }}
- ग्राफ़िक्स कार्ड के लिए: एक Vulkan ड्राइवर (NVIDIA, AMD, Intel), या CUDA के लिए NVIDIA ड्राइवर;
- कुछ गीगाबाइट खाली डिस्क।

स्रोत कोड PolyForm Noncommercial लाइसेंस के तहत [GitHub](https://github.com/GPU-Goblin) पर उपलब्ध है।
