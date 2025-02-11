# Troubleshooting Guide

This document contains solutions to common issues you may encounter while using this project.

## Error: "Could not find Chrome (ver. X.Y.Z)"

### Cause:

This error occurs when Puppeteer cannot find a Chrome installation. This can happen due to:

1. Missing installation of Chrome for Puppeteer.
2. Incorrectly configured Puppeteer cache path.

### Solution:

#### 1️⃣ Install Chrome for Puppeteer

Run the following command to install the required browser version:

```sh
npx puppeteer browsers install chrome
```

#### 2️⃣ Check Your Cache Path

Puppeteer stores browser binaries in a cache. If the cache path is incorrect, update it by setting the `PUPPETEER_CACHE_DIR` environment variable:

For macOS/Linux:

```sh
export PUPPETEER_CACHE_DIR=~/.cache/puppeteer
```

For Windows (PowerShell):

```powershell
$env:PUPPETEER_CACHE_DIR="C:\Users\User\.cache\puppeteer"
```

Then, try running your script again.

#### 3️⃣ Reinstall Puppeteer

If the issue persists, try reinstalling Puppeteer:

```sh
npm uninstall puppeteer
npm install puppeteer
```

#### 4️⃣ Specify Chrome Executable Path

If you have Chrome installed manually, specify the path when launching Puppeteer:

```js
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  });
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await browser.close();
})();
```

If you're still facing issues, ensure that Chrome is installed and available on your system.

---

For further assistance, check the [Puppeteer documentation](https://pptr.dev) or open an issue in this repository.
