import React, { useState } from "react";
import '../Nav/fonts.css'
import '../../assets/tailwind.css';

interface StateProps {
  emailText: string;
  firstName: string;
  lastName: string;
  password: string;

  setSignInState: (clicked: string) => void;
  setEmailText: (text: string) => void;
  setFirstName: (text: string) => void;
  setLastName: (text: string) => void;
  setPassword: (text: string) => void;
}

const SignUp: React.FC<StateProps> = ({ 
  emailText,
  firstName,
  lastName,
  password,

  setSignInState, 
  setEmailText,
  setFirstName,
  setLastName,
  setPassword 
  }) => {

  const emailChange = (event) => setEmailText(event.target.value);
  const firstNameChange = (event) => setFirstName(event.target.value);
  const lastNameChange = (event) => setLastName(event.target.value);
  const passwordChange = (event) => setPassword(event.target.value);
  const setIsSignedInTrue = () => setSignInState('home');
  const stateIsLogin = () => setSignInState('login');

  const submitSignUp = () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: emailText,
        firstname: firstName,
        lastname: lastName,
        password:password
      })
    }
    if (emailText != '' && 
        firstName != '' && 
        lastName != '' &&
        password != ''
       ) {
        fetch('http://127.0.0.1:3000/register', options)
        .then(response => {
          if (response.status === 200) {
            console.log('success');
            setIsSignedInTrue();
            // TODO:
            // figure out how to setIsSignedInTrue(); = true 
            // if response is 200 
          }
        })
       }
    // fetch('http://127.0.0.1:3000/register', options)
    //     .then(response => console.log(response))
  }

  return (
    <section className="min-w-full">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full rounded-3xl shadow border md:mt-0 sm:max-w-md xl:p-0 bg-zinc-800 bg-opacity-50 border-gray-400">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="font-bold text-xl tracking-widest font-press2start leading-tight text-white">
                      Create an account
                  </h1>
                  <form className="space-y-4 md:space-y-6" action="#">
                      <div>
                          <label htmlFor="email" className="block mb-2 tracking-widest font-thin font-press2start text-xs text-white">Your email</label>
                          <input type="email" name="email" onChange={emailChange} id="email" className="border sm:text-sm rounded-lg block w-full p-2.5 bg-zinc-400 bg-opacity-25 border-gray-600 placeholder-gray-400 text-white" placeholder="youremail@email.com" required></input>
                      </div>
                      <div>
                          <label htmlFor="First Name" className="block mb-2 tracking-widest font-thin font-press2start text-xs text-white">First Name</label>
                          <input onChange={firstNameChange} type="First Name" name="First Name" id="First Name" placeholder="First Name" className="border sm:text-sm rounded-lg block w-full p-2.5 bg-zinc-400 bg-opacity-25 border-gray-600 placeholder-gray-400 text-white" required></input>
                      </div>
                      <div>
                          <label htmlFor="Last Name" className="block tracking-widest font-thin font-press2start text-xs text-white">Last Name</label>
                          <input onChange={lastNameChange} type="Last Name" name="Last Name" id="Last Name" placeholder="Last Name" className="border sm:text-sm rounded-lg block w-full p-2.5 bg-zinc-400 bg-opacity-25 border-gray-600 placeholder-gray-400 text-white" required></input>
                      </div>
                      <div>
                          <label htmlFor="password" className="block tracking-widest font-thin font-press2start text-xs text-white">Password</label>
                          <input onChange={passwordChange} type="password" name="password" id="password" placeholder="••••••••" className="border sm:text-sm rounded-lg block w-full p-2.5 bg-zinc-400 bg-opacity-25 border-gray-600 placeholder-gray-400 text-white" required></input>
                      </div>
                      <button type="submit" onClick={submitSignUp} className="w-full text-white bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-600 font-semibold rounded-lg text-sm px-5 py-2.5 text-center">Create an account</button>
                      <div className="flex items-center justify-start">
                        <p className="text-sm font-light text-gray-100">
                          Already have an account?
                        </p>
                        <a href="#" onClick={stateIsLogin} className=" ml-2 font-medium hover:underline text-gray-200">Login here</a>
                      </div>
                  </form>
              </div>
          </div>
      </div>
    </section>
  )
}

export default SignUp;
