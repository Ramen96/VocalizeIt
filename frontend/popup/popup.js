function queryActiveTab() {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
    console.log(tabs);
  })
}
queryActiveTab();

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
