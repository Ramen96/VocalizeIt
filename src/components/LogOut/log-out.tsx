import React from "react";
import '../../assets/tailwind.css';

interface StateProps {
  isSignedIn: boolean;

  setIsSignedIn: (clicked: boolean) => void;
}

const Logout: React.FC<StateProps> = ({ setIsSignedIn, isSignedIn }) => {

  function logOut() {
    setIsSignedIn(false)
  }

  if (isSignedIn === true) {
    return (
      <button onClick={logOut} className="h-10 w-20 bg-green-600 rounded-xl flex flex-col items-center justify-center">
        <p className="text-gray-100">Log Out</p>
      </button>
    )
  } else { 
    return (
      <button className="h-10 w-20 bg-green-600 rounded-xl flex flex-col items-center justify-center">
        <p className="text-gray-100">Sign up</p>
      </button>
    )
  }  
}

export default Logout;
