import React from "react";
import {createRoot} from 'react-dom/client';
import './popup.css'

const test = (
  <div>
    <h1>Hello World</h1>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure nulla rem unde beatae maxime vero in deserunt aperiam magni quo officia, culpa velit, repellendus ea tenetur sunt quae facere error.</p>
  </div>
)

const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)
root.render(test);