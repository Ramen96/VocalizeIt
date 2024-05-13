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

// Popup component




(async () => { 
  try {        
    const url = await getActiveTabUrl();
    console.log("URL: ", url);
    // const testScraper = document.getElementById("test-scraper");
    // testScraper.addEventListener("click", () => {
    //   scrapeData(url);
    // })
  } catch (error) {
    console.error(error);
  }
})();

const initialState = {
  Url: ''
}

class App extends Component  {

  iHaveBeenClicked = () => {
    alert('You clicked me! 84983938')
  }
  getVoices = () => {
    const options = {method: 'GET'};
    fetch('https://api.elevenlabs.io/v1/voices/', options)
      .then(response => response.json())
      .then(response => console.log(response))
      .catch(err => console.error(err));
  }

  // callApi = () => {
  //   const options = {method: 'POST'};
  //     fetch('http://127.0.0.1:5000/api/endpoint', options)
  //     .then(response => response.blob())
  //     .then(blob => {
  //       // Create a temporary URL for the Blob
  //       const blobUrl = URL.createObjectURL(blob);
  //       const audio = new Audio();
  //       audio.src = blobUrl;
        
  //       // Play the audio
  //       audio.play();
        
  //       // Change the src of the html source tag
  //       // document.getElementById("ext-audio-player").src = blobUrl;
  //       // Handle errors
  //       audio.addEventListener('error', function() {
  //         console.error('Error playing audio.');
  //       });
        
  //     })
  //     .catch(error => {
  //       console.error('Fetch error:', error);
  //     });
  // }

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
