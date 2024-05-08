import React from "react";
import { Component } from "react";
import '../../assets/tailwind.css';

class Audio extends Component {
  render() {
    return (
      <>
        <audio controls className="ext-audio m-4 border-top" id="ext-audio-player">
          <source id="ext-audio-player" src="../audio/output.mp3" type="audio/ogg" />
          <source id="ext-audio-player" src="../audio/output.mp3" type="audio/ogg"/>
        </audio>
      </>
    )
  }
}

export default Audio;
