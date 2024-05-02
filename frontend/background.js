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
async function scrapeData(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url);

  const [element] = await page.$x('//*[@id="id__ak4x9tlofns"]/span');
  const src = await element.getPropety('src');
  const srcTxt = await src.jsonValue();

  console.log({srcTxt});

  await browser.close();
}

(async () => { 
  try {        
    const url = await getActiveTabUrl();
    console.log("URL: ", url);

    const testScraper = document.getElementById("test-scraper");
    testScraper.addEventListener("click", () => {
      scrapeData(url);
    })
  } catch (error) {
    console.error(error);
  }
})();

// Call api
const submit = document.getElementById("submit");

function callApi() {
  const options = {method: 'POST'};
    fetch('http://127.0.0.1:5000/api/endpoint', options)
    .then(response => response.blob())
    .then(blob => {
      // Create a temporary URL for the Blob
      const blobUrl = URL.createObjectURL(blob);
      const audio = new Audio();
      audio.src = blobUrl;
      
      // Play the audio
      audio.play();
      
      // Change the src of the html source tag
      document.getElementById("ext-audio-player").src = blobUrl;
      // Handle errors
      audio.addEventListener('error', function() {
        console.error('Error playing audio.');
      });
      
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
}

submit.addEventListener("click", () => {
  chrome.action.onClicked.addListener({Callback: callApi()})
});

