import React from "react";
import '../../assets/tailwind.css';
const playButton = require('../../static/icons8-play-40.png');
const downloadButton = require('../../static/icons8-download-48.png');

interface StateProps {
  setButtonClicked: (clicked: boolean) => void;
  setDownloadClicked: (clicked: boolean) => void;
}

const Submit: React.FC<StateProps> = ({ setButtonClicked, setDownloadClicked }) => {

  function clickButton() {
    setButtonClicked(true);
  }

  function clickDownload() {
    setDownloadClicked(true);
  }

  return (
    <div className="flex w-80 justify-center">
      <div className="flex justify-center w-80">
        <button 
          id="saveAudio"
          onClick={clickDownload}
          style={{width: "80px"}}
          className="ext-button position-left flex justify-center items-center">
            <img src={downloadButton} alt="download button" className="h-8 w-8" style={{marginBottom: "5px"}} />
        </button>
      </div>
       <div className="flex justify-center w-80">
        <button 
          onClick={clickButton} 
          id="submit"
          className="ext-button position-bottom flex justify-center items-center">
            <img src={playButton} alt="play button" className="h-6 w-6" style={{marginLeft: "6px"}}/>
        </button>
      </div>
    </div>
  )
}

export default Submit;
