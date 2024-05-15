import React, { Component, useState, useEffect } from "react";
import Nav from '../components/Nav/nav';
import Audio from "../components/Audio/audio";
import DropDown from "../components/Dropdown/dropdown";
import Submit from "../components/Submit/submit";
import '../assets/tailwind.css';

const App: React.FC = () => {

  const [url, setUrl] = useState('');
  const [voiceId, setVoiceId] = useState('');
  const [text, setText] = useState('');
  
  async function getActiveTabUrl () {
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
      const url = await getActiveTabUrl();
      console.log("URL: ", url);
    } catch (error) {
      console.error(error);
    }
  })();

    return(
      <div className="flex flex-col items-center h-24">
        <Nav key={'nav'} />
        <Audio key={'audio'} />
        <DropDown key={'dropdown'} />
        <Submit key={'submit'} />
      </div>
    )
}

export default App;
