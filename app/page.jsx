"use client";

import Page from "./Box/App.jsx";
import App from "./FixedConnection/App.jsx";
import App1 from "./Follow.jsx";
import App2 from "./Switch.jsx";
import App3 from "./Keystroke/App.jsx";

export default function Life() {
  return (
    <>
      <div>
        <Page />
      </div>
      <div>
        <App />
      </div>
      <div>
        <App1 />
      </div>
      <div>
        <App2 />
      </div>
      <div>
        <App3 />
      </div>
    </>
  );
}
