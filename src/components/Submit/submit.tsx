import React from "react";
import '../../assets/tailwind.css';

interface StateProps {
  url: string;
  text: string;
  buttonClicked: boolean;

  setButtonClicked: (clicked: boolean) => void;
}

const Submit: React.FC<StateProps> = ({
  url,
  text,
  buttonClicked,
  setButtonClicked
}) => {

  function clickButton() {
    setButtonClicked(true);
  }

  return (
    <div className="flex justify-center">
      <button onClick={clickButton} id="submit" className="ext-button postion-bottom">Submit</button>
    </div>
  )
}

export default Submit;
