import React, { useEffect } from "react";
import '../../assets/tailwind.css';

interface StateProps {
  url: string;
  text: string;
  voiceId: string;
  buttonClicked: boolean;
  donwloadClicked: boolean;
  downloadableMp3: boolean;
  generating: boolean;
  
  setGenerating: (clicked: boolean) => void;
  setDownloadClicked: (clicked: boolean) => void;
  setButtonClicked: (clicked: boolean) => void;
  setDownloadableMp3: (clicked: boolean) => void;
}

const AudioPlayer: React.FC<StateProps> = ({ 
  buttonClicked,
  voiceId,
  text,
  donwloadClicked,
  downloadableMp3,
  setButtonClicked,
  setDownloadClicked,
  setDownloadableMp3,
  setGenerating
 }) => {

  function playVoice() {
    setGenerating(true);
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "xi-api-key": "YOUR_API_KEY"
      },
      body: JSON.stringify({
        text: text,
        model_id: "eleven_multilingual_v1",
        "voice_settings": {
            "stability": 0.5,
            "similarity_boost": 0.8,
            "style": 0.0,
            "use_speaker_boost": true
        }
      })
    };
      fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voiceId}/stream`, options)
      .then(response => response.blob())
      .then(blob => {

        const blobUrl = URL.createObjectURL(blob);
        const audio = new Audio();

        audio.src = blobUrl;
        audio.play();
        
        const audioElement = document.getElementById('ext-audio-player') as HTMLAudioElement;
        audioElement.src = blobUrl;
        setDownloadableMp3(true);
        setGenerating(false);

        audio.addEventListener('error', function() {
          console.error('Error playing audio.');
        });
        
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  }

  function downloadMp3(url) {
    chrome.downloads.download({
      url
    })
  }

  useEffect(() => {
    if (buttonClicked === true) {
      if (text === '') {
        alert("Input text is required.");
        setButtonClicked(false);
      } else {
        playVoice();
        setButtonClicked(false);
      }
    }
    const blobUrl = document.getElementById('ext-audio-player') as HTMLAudioElement;
    const src = blobUrl.src;
    if (donwloadClicked === true) {
      if (downloadableMp3 === false) {
        alert('No audio to download!')
        setDownloadClicked(false);
      } else {
        downloadMp3(src);
        setDownloadClicked(false);
      }
    }
  })

  return(
    <div className="w-96 flex justify-center items-center mb-2">
      <audio controls className="ext-audio m-4 w-full" id="ext-audio-player">
        <source id="ext-audio-player" src="#" type="audio/ogg" />
        <source id="ext-audio-player" src="#" type="audio/ogg"/>
      </audio>
    </div>
  )
}

export default AudioPlayer;
