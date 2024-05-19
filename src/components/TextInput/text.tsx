import React from "react";
import '../../assets/tailwind.css';

interface StateProps {
  text: string;
  setText: (name: string) => void;
}

const Text: React.FC<StateProps> = ({ text }) => {

  return (
    <div className="w-full max-w-lg p-4 bg-transparent">
      <textarea
        id="large-textarea"
        placeholder="Paste or type something..."
        style={{marginTop: "5px"}}
        className="w-full h-56 p-3 border bg-neutral-700 bg-opacity-30 text-base rounded-xl font-mono border-gray-200 text-gray-300 resize-none overflow-auto focus:outline-none focus:ring-0 focus:border-gray-50 focus:ring-gray-50"
      ></textarea>
    </div>
  )
}

export default Text;
