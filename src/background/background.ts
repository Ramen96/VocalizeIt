import puppeteer from "puppeteer";
import path from "path";

//Testing puppeteer
// background.js

async function launchPuppeteer() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  chrome.runtime.onConnect.addListener(async (port) => {
    port.onMessage.addListener(async (msg) => {
      if (msg.action === 'getH2Text') {
        await page.goto('https://developer.chrome.com/docs/puppeteer/examples');
        const h2Text = await page.evaluate(() => {
          const h2Element = document.querySelector('h2');
          return h2Element ? h2Element.innerText : 'No h2 element found';
        });
        port.postMessage({ h2Text });
      }
    });
  });
}

launchPuppeteer();