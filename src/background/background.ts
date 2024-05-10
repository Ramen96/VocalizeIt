import puppeteer from 'puppeteer';


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
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto('https://developer.chrome.com/');

  // Set screen size
  await page.setViewport({width: 1080, height: 1024});

  // Type into search box
  await page.type('.devsite-search-field', 'automate beyond recorder');

  // Wait and click on first result
  const searchResultSelector = '.devsite-result-item-link';
  await page.waitForSelector(searchResultSelector);
  await page.click(searchResultSelector);

  // Locate the full title with a unique string
  const textSelector = await page.waitForSelector(
    'text/Customize and automate'
  );
  const fullTitle = await textSelector?.evaluate(el => el.textContent);

  // Print the full title
  console.log('The title of this blog post is "%s".', fullTitle);

  await browser.close();
})();