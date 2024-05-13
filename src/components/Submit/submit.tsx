import React from "react";
import { Component } from "react";
import '../../assets/tailwind.css';


function playVoice() {
  const options = {
    method: 'POST',
    voiceId: this.state.voiceId
  };
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
      // document.getElementById("ext-audio-player").src = blobUrl;
      // Handle errors
      audio.addEventListener('error', function() {
        console.error('Error playing audio.');
      });
      
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
}
const Submit = () => {
  return (
    <div className="flex justify-center">
      <button onClick={playVoice} id="submit" className="ext-button postion-bottom">Submit</button>
    </div>
  )
}

export default Submit;
