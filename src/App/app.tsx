import React, { Component } from "react";
import Nav from '../components/Nav/nav';
import Audio from "../components/Audio/audio";
import DropDown from "../components/Dropdown/dropdown";
import Submit from "../components/Submit/submit";
import '../assets/tailwind.css';

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

const initialState = {
  url: '',
  voiceId: '',
}

class App extends Component  {

  getVoices = () => {
    const options = {method: 'GET'};
    fetch('https://api.elevenlabs.io/v1/voices/', options)
      .then(response => response.json())
      .then(response => response.voices)
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }

  playVoice = () => {
    const options = {method: 'POST'};
      fetch('http://127.0.0.1:5000/api/endpoint', options)
      .then(response => response.blob())
      .then(blob => {
        // Create a temporary URL for the Blob
        const blobUrl = URL.createObjectURL(blob);
        console.log(blobUrl);

        // const audio = new Audio();
        // audio.src = blobUrl;
        // audio.play();
      })
      .catch(error => {
        console.error('Fetch error:', error);
      });
  }

  render() {
    return (
      <div className="flex flex-col items-center h-24">
        <Nav />
        <Audio />
        <DropDown />
        <Submit iHaveBeenClicked={this.getVoices} />
      </div>
    )
  }
}

export default App;
