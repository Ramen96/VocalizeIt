// const { Callback } = require("puppeteer");

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

(async () => { // This is just here for testing purposes.
  try {        // Next step is to scrape text off websites.
    const myVar = await getActiveTabUrl();
    console.log(myVar);
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
