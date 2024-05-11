import puppeteer from "puppeteer";
import path from "path";

// Get URL
async function getActiveTabUrl () {
  return new Promise((resolve, reject) => {
    chrome.tabs.query({ active: true, currentWindow: true }, (array) => {
      array && array.length > 0 ?
      resolve(array[0].url) :
      reject(new Error("No active tab found"));
    })
  })
}

// Testing web scraper
// Testing specifcally for x.com
// async function scrapeData(url) {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();

//   await page.goto(url);

//   const [element] = await page.$x('//*[@id="id__ak4x9tlofns"]/span');
//   const src = await element.getPropety('src');
//   const srcTxt = await src.jsonValue();

//   console.log({srcTxt});

//   await browser.close();
// }

(async () => { 
  try {        
    const url = await getActiveTabUrl();
    console.log("URL: ", url);

    // const testScraper = document.getElementById("test-scraper");
    // testScraper.addEventListener("click", () => {
    //   scrapeData(url);
    // })
  } catch (error) {
    console.error(error);
  }
})();


// Testing puppeteer
(async () => {
  const pathToExtension = path.join(process.cwd(), 'my-extension');
  const browser = await puppeteer.launch({
    args: [
      `--disable-extensions-except=${pathToExtension}`,
      `--load-extension=${pathToExtension}`,
    ],
  });
  
  const workerTarget = await browser.waitForTarget(
    // Assumes that there is only one service worker created by the extension and its URL ends with background.js.
    target =>
      target.type() === 'service_worker' && target.url().endsWith('background.js')
  );
  
  const worker = await workerTarget.worker();
  
  // Open a popup (available for Canary channels).
  await worker.evaluate('chrome.action.openPopup();');
  
  const popupTarget = await browser.waitForTarget(
    // Assumes that there is only one page with the URL ending with popup.html and that is the popup created by the extension.
    target => target.type() === 'page' && target.url().endsWith('popup.html')
  );
  
  const popupPage = popupTarget.asPage();
  
  // Test the popup page as you would any other page.
  
  await browser.close();
})();
