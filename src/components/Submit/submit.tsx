import React from "react";
import '../../assets/tailwind.css';
const playButton = require('../../static/icons8-play-40.png');

interface StateProps {
  setButtonClicked: (clicked: boolean) => void;
}

const Submit: React.FC<StateProps> = ({ setButtonClicked }) => {

  function clickButton() {
    setButtonClicked(true);
  }

  return (
    <div className="flex justify-center">
      <button 
        onClick={clickButton} 
        id="submit"
        className="ext-button postion-bottom flex justify-center items-center">
        <img src={playButton} alt="play button" style={{marginLeft: "7px"}}/>
        </button>
    </div>
  )
}

export default Submit;
