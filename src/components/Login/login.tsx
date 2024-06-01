import React from "react";
import '../Nav/fonts.css'
import '../../assets/tailwind.css';

interface StateProps {
  setIsSignedIn: (clicked: boolean) => void;
}

const Login: React.FC<StateProps> = ({ setIsSignedIn }) => {

  function setIsSignedInTrue() {
    setIsSignedIn(true);
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
                          <input type="email" name="email" id="email" className="border sm:text-sm rounded-lg block w-full p-2.5 bg-zinc-400 bg-opacity-25 border-gray-600 placeholder-gray-400 text-white" placeholder="youremail@email.com" required></input>
                      </div>
                      <div>
                          <label htmlFor="password" className="block mb-2 tracking-widest font-thin font-press2start text-xs text-white">Password</label>
                          <input type="password" name="password" id="password" placeholder="••••••••" className="border sm:text-sm rounded-lg block w-full p-2.5 bg-zinc-400 bg-opacity-25 border-gray-600 placeholder-gray-400 text-white" required></input>
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
                      <button type="submit" onClick={setIsSignedInTrue} className="w-full text-white bg-green-600 focus:ring-4 focus:outline-none focus:ring-green-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                      <div className="flex items-center justify-start">
                        <p className="text-sm font-light text-gray-100">
                            Don’t have an account yet?
                        </p>
                        <a href="#" className=" ml-2 font-medium hover:underline text-gray-200"> Sign up</a>
                      </div>
                  </form>
              </div>
          </div>
      </div>
    </section>
  )
}

export default Login;
