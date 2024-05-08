import React from "react";
import {createRoot} from 'react-dom/client';
import Nav from '../components/Nav/nav';
import Audio from "../components/Audio/audio";
import DropDown from "../components/Dropdown/dropdown";
import '../assets/tailwind.css';

const popup = (
  <div className="flex flex-col items-center">
    <Nav />
    <Audio />
    <DropDown />
  </div>
)

const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)
root.render(popup);
