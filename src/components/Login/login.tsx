import React from "react";
import '../Nav/fonts.css'
import '../../assets/tailwind.css';
import { useEffect } from 'react';

interface StateProps {
  userEmail: string;
  password: string;
  signInState: string;
  voiceName: string;
  voiceId: string;
  
  setVoiceName: (name: string) => void;
  setVoiceId: (id: string) => void;
  setSignInState: (clicked: string) => void;
  setPassword: (text: string) => void;
  setuserEmail: (text: string) => void;
}

const Login: React.FC<StateProps> = ({ 
  userEmail,
  password,
  signInState,

  setVoiceName,
  setVoiceId,
  setSignInState,
  setPassword,
  setuserEmail
 }) => {
  
  const setStateSignUp = () => setSignInState('sign up');
  const passwordChange = (event) => setPassword(event.target.value);
  const emailChange = (event) => setuserEmail(event.target.value);

  const login = () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: userEmail,
        password: password
      })
    }
    if (userEmail != '' && password != '') {
      fetch('https://vocalizeit-server.onrender.com/signin', options)
      .then(response => response.json())
      .then(user => user.id ? setSignInState('home') : setSignInState('login'))
      .catch(err => console.log('Error logging in'))
    }
  }

  useEffect(() => {
    const asyncStateCheck = async () => {
      if (signInState === 'auto log') {
        await new Promise(resolve => setTimeout(resolve, 25));
        login();
      }
    };
    asyncStateCheck();
  }, [signInState, login]);

  const handleStorage = () => {
    chrome.storage.local.set({ 
      email: userEmail,
      password: password
    }).then(() => {
      console.log('Values set');
    });
  };

  useEffect(() => {
    chrome.storage.local.get(["email", "password", "voiceName", "voiceId"], (res) => {
      if (res.email  && res.password ) {
        setPassword(res.password);
        setuserEmail(res.email);
        setVoiceId(res.voiceId);
        setVoiceName(res.voiceName);
      }
    });
  }, [])

  const submitLogin = (event) => {
    event.preventDefault();
    handleStorage();
    login();
  }

  return (
    <section className="min-w-full">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full rounded-3xl shadow border md:mt-0 sm:max-w-md xl:p-0 bg-zinc-800 bg-opacity-50 border-gray-400">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="font-bold text-xl tracking-widest font-press2start leading-tight text-white">
                      Sign in to your account
                  </h1>
                  <form className="space-y-4 md:space-y-6" action="#">
                      <div>
                          <label htmlFor="email" className="block mb-2 tracking-widest font-thin font-press2start text-xs text-white">Your email</label>
                          <input type="email" onChange={emailChange} name="email" id="email" className="border sm:text-sm rounded-lg block w-full p-2.5 bg-zinc-400 bg-opacity-25 border-gray-600 placeholder-gray-400 text-white" placeholder="youremail@email.com" required></input>
                      </div>
                      <div>
                          <label htmlFor="password" className="block mb-2 tracking-widest font-thin font-press2start text-xs text-white">Password</label>
                          <input type="password" onChange={passwordChange} name="password" id="password" placeholder="••••••••" className="border sm:text-sm rounded-lg block w-full p-2.5 bg-zinc-400 bg-opacity-25 border-gray-600 placeholder-gray-400 text-white" required></input>
                      </div>
                      <div className="flex items-center justify-between">
                          <div className="flex items-start">
                              <div className="flex items-center h-5">
                                <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border rounded focus:ring-3  bg-gray-200 border-gray-100 focus:ring-primary-600 ring-offset-gray-800" required></input>
                              </div>
                              <div className="ml-3 text-sm">
                                <input id="remember" type="checkbox" className="text-gray-300 h-4 w-4 bg-white" />
                                <label htmlFor="remember" className="text-gray-300">Remember me</label>
                              </div>
                          </div>
                          <a href="#" className="text-sm font-medium hover:underline text-gray-300">Forgot password?</a>
                      </div>
                      <button type="submit" onClick={submitLogin} className="w-full text-white bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-600 rounded-lg text-sm px-5 py-2.5 text-center font-semibold">Sign in</button>
                      <div className="flex items-center justify-start">
                        <p className="text-sm font-light text-gray-100">
                            Don’t have an account yet?
                        </p>
                        <a href="#" onClick={setStateSignUp} className=" ml-2 font-medium hover:underline text-gray-200"> Sign up</a>
                      </div>
                  </form>
              </div>
          </div>
      </div>
    </section>
  )
}

export default Login;
