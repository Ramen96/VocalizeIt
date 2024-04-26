// Call api
const submit = document.getElementById("submit");


// Not sure why but after adding this promise the api only gets called when reloading the extesion
// UPDATE: Per note above. Changed it back to an anonymous function now it works.
submit.addEventListener("click", () => {
  const options = {method: 'POST'};
      fetch('http://127.0.0.1:5000/api/endpoint', options)
      .then(response => response.blob())
      .then(blob => {
        console.log(blob)

        // Create a temporary URL for the Blob
        const blobUrl = URL.createObjectURL(blob);

        // Create an audio element
        const audio = new Audio();

        // Set the object URL as the audio source
        audio.src = blobUrl;

        // Play the audio
        audio.play();
        
        const htmlDynamicAuidoSrc = audio
        console.log(htmlDynamicAuidoSrc);
        chrome.downloads.download({
              url: htmlDynamicAuidoSrc,
              filename: "../audio/output.mp3",
              saveAs: false
            },
            function(downloadId) {
              if (chrome.runtime.lastError) {
                console.error(chrome.runtime.lastError);
              } else {
                console.log("File downloaded successfully");
              }
            }
          )


        // Clean up by revoking the object URL when audio playback ends or when you're finished with it
        audio.addEventListener('ended', function() {
          URL.revokeObjectURL(blobUrl);
        });

        // Handle errors
        audio.addEventListener('error', function() {
          console.error('Error playing audio.');
        });

        
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
})
  

// submit.addEventListener("click", elevenLabsApiCall());
