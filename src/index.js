//bridge between component in app.js and web browser 

//React
import React, { StrictMode } from "react";
//React’s library to talk to web browsers
import { createRoot } from "react-dom/client";
//the styles for your components
import "./styles.css";
//the component you created in App.js.
import App from "./App";


const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);