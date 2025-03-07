import connectBrowser from "./lib/browser";

(async () => {
  const { page } = await connectBrowser();
  await page.goto("https://google.com/");

  await page.fill('textarea[name="q"]', "playwright");
  await page.keyboard.press("Enter");

  await page.waitForURL("https://www.google.com/search*");

  const top1 = await page.evaluate(
    () => document.querySelector<HTMLAnchorElement>(".g a")?.href,
  );
  console.log(top1);

  await page.close();
})().catch(console.error);
