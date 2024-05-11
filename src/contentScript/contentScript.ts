// content.js
const port = chrome.runtime.connect({ name: 'puppeteer' });

port.postMessage({ action: 'getH2Text' });

port.onMessage.addListener((msg) => {
  console.log('H2 text:', msg.h2Text);
});