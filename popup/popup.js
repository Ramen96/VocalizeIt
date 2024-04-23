// This section is for handling the api
const requestAPI = document.getElementById("submit");
const XI_API_KEY = "YOUR_API_KEY_HERE";

requestAPI.addEventListener("click", () => {
  const voiceId = '21m00Tcm4TlvDq8ikWAM';

  const options = {
    method: 'POST',
    headers: {
      "Accept": "application/json",
      "xi-api-key": XI_API_KEY,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      text: "This text is a test",
      model_id: "eleven_monolingual_v1",
      voice_settings: {
        stability: 0.5,
        similarity_boost: 0.5,
        style: 0,
        use_speaker_boost: true
      },
      pronunciation_dictionary_locators: [
        {
          pronunciation_dictionary_id: "<string>",
          version_id: "<string>"
        }
      ]
    })
  };
  
  fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}/stream`, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
});


// This section fetches data from the voice and pronunciation dictionaries

function getVoiceIds() {
  const submitButton = document.getElementById("submit");
  submitButton.addEventListener("click", () => {
    const options = { method: "GET" };

    fetch("https://api.elevenlabs.io/v1/voices", options)
      .then((response) => response.json())
      .then((response) => console.log('Voices: ', response))
      .catch((err) => console.error(err));
  });
}

function getPronunciationDictionary () {
  const options = {
    method: 'GET',
    headers: {
      "xi-api-key": XI_API_KEY
    }
  };

  fetch('https://api.elevenlabs.io/v1/pronunciation-dictionaries/', options)
  .then(response => response.json())
  .then(response => console.log('PronunciationDictionary: ', response))
  .catch(err => console.error(err));

  // fetch('https://api.elevenlabs.io/v1/pronunciation-dictionaries/{pronunciation_dictionary_id}/', options)
  //   .then(response => response.json())
  //   .then(response => console.log('PronunciationDictionary: ',response))
  //   .catch(err => console.error(err));
}

// Uncomment these linese to view dictionaries
getPronunciationDictionary();
// getVoiceIds();

