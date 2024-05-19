import React, { Component, useState, useEffect } from "react";
import Nav from '../components/Nav/nav';
import AudioPlayer from "../components/Audio/audio";
import DropDown from "../components/Dropdown/dropdown";
import Submit from "../components/Submit/submit";
import Text from "../components/TextInput/text";
import '../assets/tailwind.css';

const App: React.FC = () => {

  interface Voice {
    voiceId: string;
    name: string;
  }

  const [url, setUrl] = useState<string>('');
  const [text, setText] = useState<string>('');
  const [buttonClicked, setButtonClicked] = useState<boolean>(false);
  const [voiceId, setVoiceId] = useState<string>("TX3LPaxmHKxFdv7VOQHJ");
  const [voiceName, setVoiceName] = useState<string>('AI Voices');
  const [voiceArrayPosition, setVoiceArrayPosition] = useState<Voice[]>([]);
  const [donwloadClicked, setDownloadClicked] = useState<boolean>(false);
  const [downloadableMp3, setDownloadableMp3] = useState<boolean>(false);
  
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
      let stringUrl = urlFromFunc.toString();
      setUrl(stringUrl);
    } catch (error) {
      console.error(error);
    }
  })();

    return(
      <div className="flex flex-col items-center h-24">
        <Nav />
        <AudioPlayer
        voiceId={voiceId}
        url={url}
        text={text}
        buttonClicked={buttonClicked}
        donwloadClicked={donwloadClicked}
        setButtonClicked={setButtonClicked}
        setDownloadClicked={setDownloadClicked}
        downloadableMp3={downloadableMp3}
        setDownloadableMp3={setDownloadableMp3}
        />
        <DropDown 
          voiceArrayPosition={voiceArrayPosition}
          voiceName={voiceName}
          voiceId={voiceId}
          setVoiceName={setVoiceName}
          setVoiceId={setVoiceId}
          setVoiceArrayPosition={setVoiceArrayPosition}
        />
        <Text
        setText={setText}
        />
        <Submit 
          setButtonClicked={setButtonClicked}
          setDownloadClicked={setDownloadClicked}
        />
      </div>
    )
}

export default App;
