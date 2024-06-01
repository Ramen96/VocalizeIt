import React from "react";
import '../../assets/tailwind.css';

interface StateProps {
  signInState: string;

  setSignInState: (clicked: string) => void;
}

const Logout: React.FC<StateProps> = ({ setSignInState, signInState }) => {

  function logOut() {
    setSignInState('login')
  }

  function singUp() {
    setSignInState('sign up')
  }

  function login() {
    setSignInState('login')
  }

  if (signInState === 'home') {
    return (
      <button onClick={logOut} className="h-10 w-20 bg-green-600 rounded-xl flex flex-col items-center justify-center">
        <p className="text-gray-100">Log Out</p>
      </button>
    )
  } else if (signInState === 'login'){ 
    return (
      <button onClick={singUp} className="h-10 w-20 bg-green-600 rounded-xl flex flex-col items-center justify-center">
        <p className="text-gray-100">Sign up</p>
      </button>
    )
  } else {
    return(
      <button onClick={login} className="h-10 w-20 bg-green-600 rounded-xl flex flex-col items-center justify-center">
        <p className="text-gray-100">Login</p>
      </button>
    )
  }
}

export default Logout;
