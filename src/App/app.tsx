import React, { useState } from "react";
import Nav from '../components/Nav/nav';
import AudioPlayer from "../components/Audio/audio";
import DropDown from "../components/Dropdown/dropdown";
import Submit from "../components/Submit/submit";
import Login from "../components/Login/login";
import SignUp from "../components/SignUp/signUp";
import Text from "../components/TextInput/text";
import '../assets/tailwind.css';

const App: React.FC = () => {

  interface Voice {
    voiceId: string;
    name: string;
  }

  // App states
  const [url, setUrl] = useState<string>('');
  const [text, setText] = useState<string>('Hello there, this extension uses the eleven labs API to create human sounding voices. This is the default voice Liam. You can paste or type anything you like to call the API and generate an MP3 file which you can then download.');
  const [buttonClicked, setButtonClicked] = useState<boolean>(false);
  const [voiceId, setVoiceId] = useState<string>("TX3LPaxmHKxFdv7VOQHJ");
  const [voiceName, setVoiceName] = useState<string>('AI Voices');
  const [voiceArrayPosition, setVoiceArrayPosition] = useState<Voice[]>([]);
  const [donwloadClicked, setDownloadClicked] = useState<boolean>(false);
  const [downloadableMp3, setDownloadableMp3] = useState<boolean>(false);
  const [generating, setGenerating] = useState<boolean>(false);

  // Login states
  const [signInState, setSignInState,] = useState<string>('login'); // Reference: login states are 'login', 'home', and 'sign up'
  const [userEmail, setuserEmail] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  async function getActiveTabUrl() {
    return new Promise((resolve, reject) => {
      chrome.tabs.query({ active: true, currentWindow: true }, (array) => {
        array && array.length > 0 ?
        resolve(array[0].url) :
        reject(new Error("No active tab found"));
      })
    })
  }
  
  (async () => { 
    try {        
      const urlFromFunc = await getActiveTabUrl();
      let stringUrl = urlFromFunc.toString();
      setUrl(stringUrl);
    } catch (error) {
      console.error(error);
    }
  })();

  if (signInState === 'login') {
    return(
      <div className="flex flex-col items-center h-24">
        <Nav
          signInState={signInState} 
          setSignInState={setSignInState}
        />
        <Login
          setSignInState={setSignInState}
        />
      </div>
    )
  } else if (signInState === 'sign up') {
    return (
      <div className="flex flex-col items-center h-24">
        <Nav
        setSignInState={setSignInState}
        signInState={signInState}
       />
        <SignUp
          password={password}
          lastName={lastName}
          firstName={firstName}
          userEmail={userEmail}
          setSignInState={setSignInState}
          setuserEmail={setuserEmail}
          setFirstName={setFirstName}
          setLastName={setLastName}
          setPassword={setPassword}
        />
      </div>
    )
  } else {
    return (
      <div className="flex flex-col items-center h-24">
       <Nav
        setSignInState={setSignInState}
        signInState={signInState}
       />
       <DropDown 
         voiceArrayPosition={voiceArrayPosition}
         voiceName={voiceName}
         voiceId={voiceId}
         setVoiceName={setVoiceName}
         setVoiceId={setVoiceId}
         setVoiceArrayPosition={setVoiceArrayPosition}
       />
       <Text
         setText={setText}
         generating={generating}
       />
       <AudioPlayer
         voiceId={voiceId}
         url={url}
         text={text}
         generating={generating}
         buttonClicked={buttonClicked}
         donwloadClicked={donwloadClicked}
         setButtonClicked={setButtonClicked}
         setDownloadClicked={setDownloadClicked}
         downloadableMp3={downloadableMp3}
         setDownloadableMp3={setDownloadableMp3}
         setGenerating={setGenerating}
       />
       <Submit 
         setButtonClicked={setButtonClicked}
         setDownloadClicked={setDownloadClicked}
       />
     </div>
    )
  }
}

export default App;
