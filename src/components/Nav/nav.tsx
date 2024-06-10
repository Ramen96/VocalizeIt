import React from "react";
import Logout from "../LogOut/log-out";
import '../../assets/tailwind.css';
import './fonts.css'

interface StateProps {
  signInState: string;

  setSignInState: (clicked: string) => void;
}


const Nav: React.FC<StateProps> = ({ setSignInState, signInState }) => {

  return(
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center justify-center h-16 w-full mr-5">
        <h1 className="ml-5 text- text-xl font-press2start tracking-widest text-green-500 font-mono font-thin">VocalizeIt</h1>
      </div>
      <div className="flex items-center justify-end w-full mr-5">
        <Logout 
          signInState={signInState}
          setSignInState={setSignInState} 
        />
      </div>
    </div>
  )
}

export default Nav;
