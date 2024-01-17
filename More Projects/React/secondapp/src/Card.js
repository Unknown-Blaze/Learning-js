// Card.js
import React, { useState } from 'react';

function Card(props) {
  let [numClicks, setNumClicked] = useState(0);
  let [over, setOver] = useState(false);

  const clickHandler = () => {
    setNumClicked(numClicks+1);
  };

  const overHandler = () => {
    setOver(true);
  };
  const leaveHandler = () => {
    setOver(false);
  };

  let style = props.style ? 'card-light' : 'card-dark';
  return (
    <div
      className={style}
      onClick={clickHandler}
      onMouseOver={overHandler}
      onMouseLeave={leaveHandler}
    >
      <h2>{props.h2}</h2>
      <h3>{props.h3}</h3>
      {numClicks > 0 && <h4>Clicked: {numClicks}</h4>}
      {over && <h4>I'm here!</h4>}
    </div>
  );
}

export default Card;
