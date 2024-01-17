// App.js
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState, useEffect } from 'react';
import './App.css';
import Card from './Card';
import LDMode from './LDMode';

function App() {
  let [isLightMode, setIsLightMode] = useState(true);

  const LDHandler = () => {
    setIsLightMode(!isLightMode);
  };
  // useEffect(() => {
  //   const timeoutId = setTimeout(LDHandler, 250);

  //   // Clear the timeout on component unmount or when the effect is re-run
  //   return () => clearTimeout(timeoutId);
  // }, [isLightMode]);

  let btnstyle = isLightMode ? "btn btn-dark" : "btn btn-light";

  let cname = isLightMode ? 'App light-mode' : 'App dark-mode';
  return (
    <div className={cname}>
      <h1>Task: Add three Card elements</h1>
      <Card style={isLightMode} h2="First card's h2" h3="First card's h3" />
      <Card style={isLightMode} h2="Second card's h2" h3="Second card's h3" />
      <Card style={isLightMode} h2="Third card's h2" h3="Third card's h3" />
      <LDMode style={btnstyle} isLightMode={isLightMode} handler={LDHandler} />

    </div>
  );
}

export default App;
