import React from "react";
import { Component } from "react";
import '../../assets/tailwind.css';

class DropDown extends Component {

  constructor(props) {
    super(props);
    this.state = {
      voiceId: '',
      voiceName: '',
      voiceArrayPosition: []
    }
  }
  
  componentDidMount(): void {
    const options = {method: 'GET'};
    fetch('https://api.elevenlabs.io/v1/voices/', options)
      .then(response => response.json())
      .then(response => response.voices)
      .then(response => {
        this.setState({voiceName: response});
      })
      .catch(err => console.error(err));
  }

  // TODO: 
  // 1. Figure out how to update the section dropdown with the voice names dynamically
  //    - Voices are stored in an array containing objects voiceArrayPosition: []
  // 2. Create function that will loop through the array grabing the voice name and ID 
  //      - Display them in the section dropdown 
  // 3. When a voice in the drop down is clicked on update state for voice name, ID and display voiceName as the lable.
  render() {
    console.log("This.state", this.state);
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
