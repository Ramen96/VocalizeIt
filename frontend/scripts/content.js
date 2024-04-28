// // console.log("Window Location: ", getPageURL);





// const puppeteer = require('puppeteer');


// const getPageURL = window.location.href;
  
// const webScraper = async (url) => {

//   // Launch the browser and open a new blank page
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto(url);

//   const [el] = await page.$x('//*[@id="3ce2"]');
//   const src = await el.getProperty('src');
//   const srcTxt = await src.jsonValue();
//   console.log({srcTxt});

//   browser.close();
// }

// webScraper("https://medium.com/datadriveninvestor/my-chatgpt-generated-trading-strategies-are-demolishing-the-market-d855454df306");