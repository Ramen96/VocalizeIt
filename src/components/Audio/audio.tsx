import React from "react";
import { Component } from "react";
import '../../assets/tailwind.css';

class Audio extends Component {
  render() {
    return (
      <div className="border-top w-96 flex justify-center items-center">
        <audio controls className="ext-audio m-4" id="ext-audio-player">
          <source id="ext-audio-player" src="../audio/output.mp3" type="audio/ogg" />
          <source id="ext-audio-player" src="../audio/output.mp3" type="audio/ogg"/>
        </audio>
      </div>
    )
  }
}

export default Audio;
