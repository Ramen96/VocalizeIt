import React from "react";
import '../../assets/tailwind.css';

interface StateProps {
  signInState: string;
  userEmail: string;
  password: string;

  setSignInState: (clicked: string) => void;
  setPassword: (text: string) => void;
  setuserEmail: (text: string) => void;
  setVoiceId: (text: string) => void;
  setVoiceName: (text: string) => void;
}

const Logout: React.FC<StateProps> = ({ 
  setSignInState, 
  setPassword,
  setuserEmail,
  setVoiceId,
  setVoiceName,
  signInState 
}) => {

  const handleStorage = () => {
    chrome.storage.local.set({ 
      email: '',
      password: ''
    }).then(() => {
      console.log('Values set');
    });
  };

  function logOut() {
    setSignInState('login')
    setPassword('');
    setuserEmail('');
    setVoiceId('TX3LPaxmHKxFdv7VOQHJ');
    setVoiceName('AI Voices')
    handleStorage();
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
        <p className="text-gray-100 font-semibold">Log Out</p>
      </button>
    )
  } 
  if (signInState === 'auto log' || signInState === 'login') { 
    return (
      <button onClick={singUp} className="h-10 w-20 bg-green-600 rounded-xl flex flex-col items-center justify-center">
        <p className="text-gray-100 font-semibold">Sign up</p>
      </button>
    )
  }
  if (signInState === 'sign up') {
    return(
      <button onClick={login} className="h-10 w-20 bg-green-600 rounded-xl flex flex-col items-center justify-center">
        <p className="text-gray-100 font-semibold">Login</p>
      </button>
    )
  }
}

export default Logout;
