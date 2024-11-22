import chromium from '@sparticuz/chromium-min';
import puppeteer from 'puppeteer-core';

chromium.setHeadlessMode = true;
chromium.setGraphicsMode = false;

await chromium.font(
  "https://raw.githack.com/googlei18n/noto-emoji/master/fonts/NotoColorEmoji.ttf"
);

export async function POST() {
    

  const isLocal = !!process.env.CHROME_EXECUTABLE_PATH;

  const browser = await puppeteer.launch({
    args: isLocal ? puppeteer.defaultArgs() : chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: process.env.CHROME_EXECUTABLE_PATH || await chromium.executablePath('https://test-scraper1/chromium-v131.0.0-pack/'),
    headless: chromium.headless,
  });

  const page = await browser.newPage();
  await page.goto("https://www.sfc.hk/en/Rules-and-standards/Codes-and-guidelines/Codes");

  // Extract table data
  const tableData = await page.evaluate(() => {
    const rows = Array.from(document.querySelectorAll('table tr')); // Selecting all table rows
    return rows.map(row => {
      const cells = Array.from(row.querySelectorAll('td')); // Selecting td
      return cells.map(cell => cell.innerText.trim()); // Getting text content
    });
  });

  await browser.close();

  return Response.json({
    tableData, // Return the scraped table data
  });
}
