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
  setVoiceName,
  setVoiceId,
  setVoiceArrayPosition
}) => {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const options = { method: 'GET' };
    fetch('https://api.elevenlabs.io/v1/voices/', options)
      .then(response => response.json())
      .then(data => {
        setVoiceArrayPosition(data.voices);
      })
      .catch(err => console.error(err));
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (voice) => {
    setVoiceName(voice.name);
    setVoiceId(voice.voice_id);
    setIsDropdownOpen(false); // Close the dropdown after selecting an option
  };

  return (
    <div className="sec-center">
      <input
        className="dropdown"
        type="checkbox"
        id="dropdown"
        name="dropdown"
        checked={isDropdownOpen}
        onChange={toggleDropdown}
      />
      <label className="for-dropdown" htmlFor="dropdown">
        {voiceName}
        <i className="uil uil-arrow-down ext-icon2"></i>
      </label>
      {isDropdownOpen && (
        <div className="ext-section-dropdown">
          {voiceArrayPosition.map((voice) => (
            <a
              key={voice.voice_id}
              href="#"
              className="ext-icon"
              onClick={() => handleOptionClick(voice)}
            >
              {voice.name} <i className="uil uil-arrow-right"></i>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
