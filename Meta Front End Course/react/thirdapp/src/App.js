import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const url = `https://api.data.gov.my/weather/forecast?contains=St@location__location_id`;

  const fetchData = async () => {
    try {
      const result = await fetch(url);
      const data = await result.json();
      console.log(data);
      const today = new Date();
      const currentDate = today.toLocaleString("en-CA");
      let kl = data.find(e => e.location.location_id === "St009" && e.date === currentDate);
      setL(kl);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  let [l, setL] = useState("");
  
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      {l && (
        <>
          Temperature at KL on {l.date}:<br />
          Minimum: {l.min_temp}<br />
          Maximum: {l.max_temp}<br />
          Expected weather at morning: {l.morning_forecast}<br />
          Expected weather at afternoon: {l.afternoon_forecast}<br />
          Expected weather at night: {l.night_forecast}
        </>
      )}
    </div>
  );
}

export default App;
