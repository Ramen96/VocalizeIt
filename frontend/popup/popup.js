// function queryActiveTab() {
//   chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
//     return tabs[0].url;
//   })
// }

// let myVar = queryActiveTab();

// console.log("Active tab url: ", myVar);

const activeTabUrl = new Promise((resolve) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    resolve(tabs[0].url);
    console.log("URLLLLL", tabs[0].url); // logs the URl
    // Need to figure out how to properly handle async operation 
  })
})


console.log(activeTabUrl)

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
