import React, { Component } from "react";
import Nav from '../components/Nav/nav';
import Audio from "../components/Audio/audio";
import DropDown from "../components/Dropdown/dropdown";
import Submit from "../components/Submit/submit";
import '../assets/tailwind.css';

class App extends Component {
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
