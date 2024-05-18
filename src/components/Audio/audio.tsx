import React, { useEffect } from "react";
import '../../assets/tailwind.css';

interface StateProps {
  url: string;
  text: string;
  buttonClicked: boolean;

  setButtonClicked: (clicked: boolean) => void;
}

const AudioPlayer: React.FC<StateProps> = ({ buttonClicked, setButtonClicked }) => {

  function playVoice() {
    const options = {
      method: 'POST',
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

  useEffect(() => {
    if (buttonClicked === true) {
      console.log('button clicked in submit component!');
      setButtonClicked(false);
      console.log('resetting button state to false. click again to call this function again sucessfully')
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
