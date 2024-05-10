import React from "react";
import { createRoot } from 'react-dom/client';
import App from "../App/app";
import '../assets/tailwind.css';

const popup = (
  <App />
)

const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)
root.render(popup);
