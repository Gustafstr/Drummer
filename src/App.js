import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App" id="drum-machine">
      {/* Display för knapparna */}
      <div className="display" id="display">
        <button className="drum-pad" id="Q">
          Q
        </button>
        <button className="drum-pad" id="W">
          W
        </button>
        <button className="drum-pad" id="E">
          E
        </button>
        <button className="drum-pad" id="A">
          A
        </button>
        <button className="drum-pad" id="S">
          S
        </button>
        <button className="drum-pad" id="D">
          D
        </button>
        <button className="drum-pad" id="Z">
          Z
        </button>
        <button className="drum-pad" id="X">
          X
        </button>
        <button className="drum-pad" id="C">
          C
        </button>
      </div>

      {/* Kontrollpanelen till höger */}
      <div className="control-panel">
        {/* Power-kontroll */}
        <div className="power-control">
          <label htmlFor="power-switch">Power</label>
          <input type="checkbox" id="power-switch" />
        </div>

        {/* Shaker-kontroll, antagligen en indikator för ljudet som spelas */}
        <div className="shaker-display">
          <label htmlFor="shaker">Shaker</label>
          <div id="shaker">Shaker Sound Name</div>
        </div>

        {/* Volymkontroll */}
        <div className="volume-control">
          <label htmlFor="volume-slider">Volume</label>
          <input type="range" id="volume-slider" min="0" max="100" />
        </div>

        {/* Bank-kontroll */}
        <div className="bank-control">
          <label htmlFor="bank-switch">Bank</label>
          <input type="checkbox" id="bank-switch" />
        </div>
      </div>
    </div>
  );
}

export default App;
