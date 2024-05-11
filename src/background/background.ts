//import puppeteer from "puppeteer";
import path from "path";

const puppeteer = require('puppeteer');

async function launchBrowser() {
  const browser = await puppeteer.launch({
    headless: false, // set to true for headless mode
    args: ['--disable-web-security'] // required for cross-origin requests
  });
  // continue with scraping logic
}

launchBrowser();


async function scrapeData(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  // scrape data using Puppeteer APIs
  const data = await page.evaluate(() => {
    // execute JavaScript in the page context
    const elements = document.querySelectorAll('selector');
    const data = Array.from(elements).map(el => el.textContent);
    return data;
  });

  console.log(data);

  await browser.close();
}

scrapeData('https://www.example.com');