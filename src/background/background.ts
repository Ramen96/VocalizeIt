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
