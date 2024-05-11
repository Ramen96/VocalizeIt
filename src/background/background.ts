import puppeteer from "puppeteer";
import path from "path";

// Testing puppeteer

async function scrapeWebsite() {
  const extensonPath = '/dist';
  const browser = await puppeteer.launch({
    headless: false,
    args: [
      `--disable-extensions-execpt=${extensonPath}`,
      `--load-extension=${extensonPath}`

    ]
  });
  const page = await browser.newPage();
  await page.goto('https://developer.chrome.com/docs/puppeteer/examples');
  // Write your scraping logic here
  const data = await page.evaluate(() => {
    // Example scraping logic
    const title = document.querySelector('h2').innerText;
    return { title };
  });
  await browser.close();
  console.log(data);
  return data;
}


(async () => { 
  try {        
    scrapeWebsite();
  } catch (error) {
    console.error(error);
  }
})();
