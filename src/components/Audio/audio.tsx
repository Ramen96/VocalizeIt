import React, { useEffect, useState } from "react";
import '../../assets/tailwind.css';

interface StateProps {
  url: string;
  text: string;
  buttonClicked: boolean;
  voiceId: string;

  setButtonClicked: (clicked: boolean) => void;
}

const AudioPlayer: React.FC<StateProps> = ({ 
  buttonClicked,
  voiceId,
  text,
  setButtonClicked
 }) => {

  function playVoice() {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        voiceId: voiceId,
        text: text
      })
    };
      fetch('http://127.0.0.1:5000/api/endpoint', options)
      .then(response => response.blob())
      .then(blob => {

        const blobUrl = URL.createObjectURL(blob);
        const audio = new Audio();

        audio.src = blobUrl;
        audio.play();
        
        const audioElement = document.getElementById('ext-audio-player') as HTMLAudioElement;
        audioElement.src = blobUrl;

        audio.addEventListener('error', function() {
          console.error('Error playing audio.');
        });
        
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  }

  useEffect(() => {
    if (buttonClicked === true) {
      playVoice();
      setButtonClicked(false);
    }
  })

  return(
    <div className="border-top w-96 flex justify-center items-center">
      <audio controls className="ext-audio m-4" id="ext-audio-player">
        <source id="ext-audio-player" src="#" type="audio/ogg" />
        <source id="ext-audio-player" src="#" type="audio/ogg"/>
      </audio>
    </div>
  )
}

export default AudioPlayer;
