import React from "react";
import Logout from "../LogOut/log-out";
import '../../assets/tailwind.css';
import './fonts.css'

interface StateProps {
  signInState: string;
  userEmail: string;
  password: string;

  setSignInState: (clicked: string) => void;
  setPassword: (text: string) => void;
  setuserEmail: (text: string) => void;
}


const Nav: React.FC<StateProps> = ({ 
  signInState,
  userEmail,
  password,

  setSignInState,
  setPassword,
  setuserEmail
}) => {

  return(
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center justify-center h-16 w-full mr-5">
        <h1 className="ml-5 text- text-xl font-press2start tracking-widest text-green-500 font-mono font-thin">VocalizeIt</h1>
      </div>
      <div className="flex items-center justify-end w-full mr-5">
        <Logout 
          userEmail={userEmail}
          password={password}
          signInState={signInState}
          setSignInState={setSignInState} 
          setuserEmail={setuserEmail}
          setPassword={setPassword}
        />
      </div>
    </div>
  )
}

export default Nav;
