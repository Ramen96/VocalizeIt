import React from "react";
import {createRoot} from 'react-dom/client';
import Nav from '../components/Nav/nav'
import '../assets/tailwind.css'

const popup = (
  <div>
    <Nav />
  </div>
)

const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)
root.render(popup);
