import React from "react";
import '../Nav/fonts.css'
import '../../assets/tailwind.css';

interface StateProps {
  setSignInState: (clicked: string) => void;
}

const SignUp: React.FC<StateProps> = ({ setSignInState }) => {

  function setIsSignedInTrue() {
    setSignInState('home');
  }

  function stateIsLogin() {
    setSignInState('login')
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
                          <input type="email" name="email" id="email" className="border sm:text-sm rounded-lg block w-full p-2.5 bg-zinc-400 bg-opacity-25 border-gray-600 placeholder-gray-400 text-white" placeholder="youremail@email.com" required></input>
                      </div>
                      <div>
                          <label htmlFor="password" className="block mb-2 tracking-widest font-thin font-press2start text-xs text-white">First Name</label>
                          <input type="password" name="password" id="password" placeholder="First Name" className="border sm:text-sm rounded-lg block w-full p-2.5 bg-zinc-400 bg-opacity-25 border-gray-600 placeholder-gray-400 text-white" required></input>
                      </div>
                      <div>
                          <label htmlFor="password" className="block tracking-widest font-thin font-press2start text-xs text-white">Last Name</label>
                          <input type="password" name="password" id="password" placeholder="Last Name" className="border sm:text-sm rounded-lg block w-full p-2.5 bg-zinc-400 bg-opacity-25 border-gray-600 placeholder-gray-400 text-white" required></input>
                      </div>
                      <div>
                          <label htmlFor="password" className="block tracking-widest font-thin font-press2start text-xs text-white">Password</label>
                          <input type="password" name="password" id="password" placeholder="••••••••" className="border sm:text-sm rounded-lg block w-full p-2.5 bg-zinc-400 bg-opacity-25 border-gray-600 placeholder-gray-400 text-white" required></input>
                      </div>
                      <button type="submit" onClick={setIsSignedInTrue} className="w-full text-white bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-600 font-semibold rounded-lg text-sm px-5 py-2.5 text-center">Create an account</button>
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
