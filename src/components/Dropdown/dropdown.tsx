import React, { useState, useEffect } from 'react';
import '../../assets/tailwind.css';

const DropDown: React.FC = () => {
  const [voiceId, setVoiceId] = useState('');
  const [voiceName, setVoiceName] = useState('');
  const [voiceArrayPosition, setVoiceArrayPosition] = useState([]);

  useEffect(() => {
    const options = { method: 'GET' };
    fetch('https://api.elevenlabs.io/v1/voices/', options)
      .then(response => response.json())
      .then(data => {
        setVoiceArrayPosition(data.voices);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="sec-center">
      <input className="dropdown" type="checkbox" id="dropdown" name="dropdown" />
      <label className="for-dropdown" htmlFor="dropdown">
        AI Voices<i className="uil uil-arrow-down ext-icon2"></i>
      </label>
      <div className="ext-section-dropdown">
        {voiceArrayPosition.map(voice => (
          <a
            key={voice.id}
            href="#"
            className="ext-icon"
            onClick={() => setVoiceName(voice.name)}
          >
            {voice.name}
            <i className="uil uil-arrow-right"></i>
          </a>
        ))}
      </div>
    </div>
  );
};

export default DropDown;
















// import React, { Component } from "react";
// import '../../assets/tailwind.css';

// interface Voice {
//   id: string;
//   name: string;
// }

// interface State {
//   voiceId: string;
//   voiceName: string;
//   voiceArrayPosition: Voice[];
// }

// class DropDown extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       voiceId: '',
//       voiceName: '',
//       voiceArrayPosition: []
//     }
//   }
  
//   componentDidMount(): void {
//     const options = {method: 'GET'};
//     fetch('https://api.elevenlabs.io/v1/voices/', options)
//       .then(response => response.json())
//       .then(data => {
//         this.setState({voiceArrayPosition: data.voices});
//       })
//       .catch(err => console.error(err));
//   }
//   // TODO: 
//   // 1. Figure out how to update the section dropdown with the voice names dynamically
//   //    - Voices are stored in an array containing objects voiceArrayPosition: []
//   // 2. Create function that will loop through the array grabing the voice name and ID 
//   //      - Display them in the section dropdown 
//   // 3. When a voice in the drop down is clicked on update state for voice name, ID and display voiceName as the lable.
//   render() {
//     // Cant access this.state.voiceArrayPosition keep getting TS2339
//     console.log(this.state)
//     return (
//       <div className="sec-center"> 	
//         <input className="dropdown" type="checkbox" id="dropdown" name="dropdown"/>
//         <label className="for-dropdown" htmlFor="dropdown">AI Voices<i className="uil uil-arrow-down ext-icon2"></i></label>
//         <div className="ext-section-dropdown"> 
//             <a href="#" className="ext-icon">Voice<i className="uil uil-arrow-right"></i></a>
//             <a href="#" className="ext-icon">Voice<i className="uil uil-arrow-right"></i></a>
//             <a href="#" className="ext-icon">Voice<i className="uil uil-arrow-right"></i></a>
//             <a href="#" className="ext-icon">Voice<i className="uil uil-arrow-right"></i></a>
//             <a href="#" className="ext-icon">Voice<i className="uil uil-arrow-right"></i></a>
//             <a href="#" className="ext-icon">Voice<i className="uil uil-arrow-right"></i></a>
//         </div>
//     </div>
//     )
//   }
// }

// export default DropDown;
