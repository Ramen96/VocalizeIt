import React, { useState, useEffect } from 'react';
import '../../assets/tailwind.css';

interface Voice {
  voiceId: string;
  name: string;
}

interface StateProps {
  voiceArrayPosition: any;
  voiceName: string;
  voiceId: string;
  
  setVoiceName: (name: string) => void;
  setVoiceId: (id: string) => void;
  setVoiceArrayPosition: (voices: Voice[]) => void;
}

const DropDown: React.FC<StateProps> = ({
  voiceArrayPosition,
  voiceName,
  voiceId,
  setVoiceName,
  setVoiceId,
  setVoiceArrayPosition
}) => {

  useEffect(() => {
    const options = { method: 'GET' };
    fetch('https://api.elevenlabs.io/v1/voices/', options)
      .then(response => response.json())
      .then(data => {
        setVoiceArrayPosition(data.voices);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="sec-center">
      <input className="dropdown" type="checkbox" id="dropdown" name="dropdown" />
      <label className="for-dropdown" htmlFor="dropdown">
        {voiceName}<i className="uil uil-arrow-down ext-icon2"></i>
      </label>
      <div className="ext-section-dropdown">
        {voiceArrayPosition.map(voice => (
          <a
            key={voice.voice_id}
            href="#"
            className="ext-icon"
            onClick={() => {
              setVoiceName(voice.name);
              setVoiceId(voice.voice_id);
            }}
          >
            {voice.name}
            <i className="uil uil-arrow-right"></i>
          </a>
        ))}
      </div>
    </div>
  );
};

export default DropDown;
