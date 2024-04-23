const requestAPI = document.getElementById("submit");
const getVoiceIds = document.getElementById("submit");

const XI_API_KEY = "YOUR_API_KEY_HERE";

requestAPI.addEventListener("click", () => {
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
  
  fetch(`https://api.elevenlabs.io/v1/text-to-speech/21m00Tcm4TlvDq8ikWAM/stream`, options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
});

getVoiceIds.addEventListener("click", () => {
  const options = { method: "GET" };

  fetch("https://api.elevenlabs.io/v1/voices", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
});
