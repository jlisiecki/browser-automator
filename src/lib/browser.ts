import { exec } from "node:child_process";
import { env } from "@/env";
import { chromium } from "playwright";

const commands = {
  kill: {
    windows: "taskkill /IM chrome.exe /F /T",
    macos: "killall 'Google Chrome'",
  },
  start: {
    windows: `start chrome --remote-debugging-port=${env.CHROME_DEBUG_PORT} --profile-directory="${env.CHROME_PROFILE}"`,
    macos: `open -na "Google Chrome" --args --remote-debugging-port=${env.CHROME_DEBUG_PORT} --profile-directory="${env.CHROME_PROFILE}"`,
  },
};

let platform: "windows" | "macos";

switch (process.platform) {
  case "win32":
    platform = "windows";
    break;
  case "darwin":
    platform = "macos";
    break;
  default:
    throw new Error("Unsupported platform");
}

export default async function connectBrowser() {
  let browser = await connectChromium().catch(() => null);

  if (!browser) await restartBrowser();
  browser = await connectChromium();

  const context = browser.contexts()[0];
  const page = await context.newPage();

  const closePage = page.close.bind(page);

  page.close = async () => {
    await closePage();
    await browser.close();
    console.log("Page / Browser closed");
  };

  return { page, context, browser };
}

export async function restartBrowser() {
  await new Promise((resolve) =>
    exec(commands.kill[platform], (_, stdout) => resolve(stdout)),
  );
  await new Promise((resolve) => setTimeout(resolve, 5 * 1000));
  exec(commands.start[platform]);

  let browser = await connectChromium().catch(() => null);

  while (!browser) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    browser = await connectChromium().catch(() => null);
  }

  await browser.close();
}

async function connectChromium() {
  return chromium.connectOverCDP(`http://127.0.0.1:${env.CHROME_DEBUG_PORT}`);
}
