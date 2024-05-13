import React, { Component } from "react";
import Nav from '../components/Nav/nav';
import Audio from "../components/Audio/audio";
import DropDown from "../components/Dropdown/dropdown";
import Submit from "../components/Submit/submit";
import '../assets/tailwind.css';

const initialState = {
  url: '',
  voiceId: '',
  text: ''
}

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

class App extends Component  {

  constructor(props) {
    super(props);
    this.state = initialState;
  }

  logState = () => {
    console.log(this.state)
  }

  render() {
    return (
      <div className="flex flex-col items-center h-24">
        <Nav />
        <Audio />
        <DropDown />
        <Submit />
      </div>
    )
  }
}

export default App;
