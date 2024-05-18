import React, { Component, useState, useEffect } from "react";
import Nav from '../components/Nav/nav';
import Audio from "../components/Audio/audio";
import DropDown from "../components/Dropdown/dropdown";
import Submit from "../components/Submit/submit";
import '../assets/tailwind.css';

const App: React.FC = () => {

  interface Voice {
    voiceId: string;
    name: string;
  }

  const [url, setUrl] = useState<string>('');
  const [text, setText] = useState<string>('');

  const [voiceId, setVoiceId] = useState<string>("");
  const [voiceName, setVoiceName] = useState<string>('AI Voices');
  const [voiceArrayPosition, setVoiceArrayPosition] = useState<Voice[]>([]);
  
  async function getActiveTabUrl() {
    return new Promise((resolve, reject) => {
      chrome.tabs.query({ active: true, currentWindow: true }, (array) => {
        array && array.length > 0 ?
        resolve(array[0].url) :
        reject(new Error("No active tab found"));
      })
    })
  }
  
  (async () => { 
    try {        
      const urlFromFunc = await getActiveTabUrl();
      console.log("Url is a:",typeof(urlFromFunc));
      // setUrl(urlFromFunc) // This line dose not work?
      setUrl(JSON.stringify(urlFromFunc)); // but ths line dose work?
    } catch (error) {
      console.error(error);
    }
  })();

    return(
      <div className="flex flex-col items-center h-24">
        <Nav />
        <Audio />
        <DropDown 
          voiceArrayPosition={voiceArrayPosition}
          voiceName={voiceName}
          voiceId={voiceId}
          setVoiceName={setVoiceName}
          setVoiceId={setVoiceId}
          setVoiceArrayPosition={setVoiceArrayPosition}
        />
        <Submit 
          url={url}
          text={text}
        />
      </div>
    )
}

export default App;
