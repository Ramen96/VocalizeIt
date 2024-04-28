// import { getPageURL } from '/background.js'

// const getPageURL = window.location.href
// console.log("Window Location: ", getPageURL);

async function scrapeText() {
  let [tab] = await chrome.tabs.query({
    active: true,
    currnetWindow: true
  })
  chrome.scripting.executeScript({
    target: {tabId: tab.id},
    func: getTextFromPage,
  })
}

// function getTextFromPage() {
//   const textRegEx = (?s)<[^>]*>|

// }

function getTextFromPage() {
  const textRegEx = /(?s)<[^>]*>|/g;

  let pageText = document.body.innerHTML.match(textRegEx);
  console.log("Page text: ", pageText);
}
getTextFromPage();

// Call api
const submit = document.getElementById("submit");
submit.addEventListener("click", () => {
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
});
