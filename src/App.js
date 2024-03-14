import React, { useState, useEffect } from "react";
import "./App.css";
function App() {
  const drumPads = [
    {
      key: "Q",
      id: "Heater-1",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
    },
    {
      key: "W",
      id: "Heater-2",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
    },
    {
      key: "E",
      id: "Heater-3",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
    },
    {
      key: "A",
      id: "Heater-4",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
    },
    {
      key: "S",
      id: "Clap",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
    },
    {
      key: "D",
      id: "Open-HH",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
    },
    {
      key: "Z",
      id: "Kick-n'-Hat",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
    },
    {
      key: "X",
      id: "Kick",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
    },
    {
      key: "C",
      id: "Closed-HH",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
    },
  ];

  const [display, setDisplay] = useState("Välj ett chord");

  const playSound = (key) => {
    const audio = document.getElementById(key);
    audio.currentTime = 0;
    audio.play();
    const drumPadName = drumPads.find((pad) => pad.key === key).id;
    updateDisplay(drumPadName);
  };

  const updateDisplay = (name) => {
    setDisplay(name);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toUpperCase();
      const drumPad = drumPads.find((pad) => pad.key === key);
      if (drumPad) {
        playSound(key);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [drumPads]); // Lägger till drumPads som en dependency så useEffect vet när den ska köra om

  return (
    <div className="App" id="drum-machine">
      <h1 className="text-primary animated-underline">
        Tjena amigo! Spela lite trummor!
      </h1>
      <div id="display" className="display">
        {display}
      </div>
      <div className="drum-pads">
        {drumPads.map((pad) => (
          <button
            className="drum-pad"
            id={pad.id}
            key={pad.key}
            onClick={() => playSound(pad.key)}>
            {pad.key}
            <audio
              className="clip"
              id={pad.key}
              src={pad.src}
              preload="auto"></audio>
          </button>
        ))}
      </div>
      <div className="controls">
        <div className="control">
          <label htmlFor="power-switch">Power</label>
          <input type="checkbox" id="power-switch" />
        </div>
        <div className="control">
          <label htmlFor="bank-switch">Bank</label>
          <input type="checkbox" id="bank-switch" />
        </div>
        <div className="volume-slider">
          <input type="range" id="volume-slider" min="0" max="100" />
        </div>
      </div>
    </div>
  );
}

export default App;
