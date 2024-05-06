import React from "react";
import {createRoot} from 'react-dom/client';
import '../assets/tailwind.css'

const test = (
  <div>
    <h1 className="text-5xl text-green-500 bg-green-50">Hello World</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure nulla rem unde beatae maxime vero in deserunt aperiam magni quo officia, culpa velit, repellendus ea tenetur sunt quae facere error.</p>
    <img src='pat-back.svg' alt='background'></img>
  </div>
)

const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)
root.render(test);
