import React from "react";
import '../../assets/tailwind.css';

interface StateProps {
  text: string;
  setText: (name: string) => void;
}

const Text: React.FC<StateProps> = ({ text }) => {

  return (
    <div className="flex justify-center">
      <input type="email" id="helper-text" aria-describedby="helper-text-explanation" className="text-sm m-5 w-80 h-52 overflow-y-auto rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-950 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Paste some text or type something..."></input>
      <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400"></p>
    </div>
  )
}

export default Text;
