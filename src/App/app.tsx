import React, { Component } from "react";
import Nav from '../components/Nav/nav';
import Audio from "../components/Audio/audio";
import DropDown from "../components/Dropdown/dropdown";
import Submit from "../components/Submit/submit";
import '../assets/tailwind.css';

class App extends Component {
  iHaveBeenClicked = () => {
    alert('You clicked me! 84983938')
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
        <Submit iHaveBeenClicked={this.iHaveBeenClicked} />
      </div>
    )
  }
}

export default App;
