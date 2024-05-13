import React from "react";
import { Component } from "react";
import '../../assets/tailwind.css';

class DropDown extends Component {

  constructor(props) {
    super(props);
    this.state = {
      voiceId: '',
      voiceName: []
    }
  }

  getVoices = () => {
    const options = {method: 'GET'};
    fetch('https://api.elevenlabs.io/v1/voices/', options)
      .then(response => response.json())
      .then(response => response.voices)
      .then(response => {
        const voices = response;
        console.log(voices);

        this.setState({voiceName: voices});
      })
      .catch(err => console.error(err));
  }

  render() {
    this.getVoices(); // Testing 
    console.log("This.state", this.state) // Works but keeps refreshing in console.
    return (
      <div className="sec-center"> 	
        <input className="dropdown" type="checkbox" id="dropdown" name="dropdown"/>
        <label className="for-dropdown" htmlFor="dropdown">AI Voices<i className="uil uil-arrow-down ext-icon2"></i></label>
        <div className="ext-section-dropdown"> 
            <a href="#" className="ext-icon">Voice<i className="uil uil-arrow-right"></i></a>
            <a href="#" className="ext-icon">Voice<i className="uil uil-arrow-right"></i></a>
            <a href="#" className="ext-icon">Voice<i className="uil uil-arrow-right"></i></a>
            <a href="#" className="ext-icon">Voice<i className="uil uil-arrow-right"></i></a>
            <a href="#" className="ext-icon">Voice<i className="uil uil-arrow-right"></i></a>
            <a href="#" className="ext-icon">Voice<i className="uil uil-arrow-right"></i></a>
        </div>
    </div>
    )
  }
}

export default DropDown;