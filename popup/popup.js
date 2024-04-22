const buttonClicked = document.getElementById('submit');



buttonClicked.addEventListener("click", () => {
  const options = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: '{"text":"<string>","model_id":"<string>","voice_settings":{"stability":123,"similarity_boost":123,"style":123,"use_speaker_boost":true},"pronunciation_dictionary_locators":[{"pronunciation_dictionary_id":"<string>","version_id":"<string>"}]}'
  };
  // alert('It Works');
  fetch('https://api.elevenlabs.io/v1/text-to-speech/{fqnKvlQ2zM2M3Utu5oTR}', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
})

