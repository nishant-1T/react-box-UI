import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [hori, setHori] = useState(0);
  const [ver, setVer] = useState(0);
  const [blur, setBlur] = useState(0);
  const [color, setColor] = useState("black");
  const [checkOn, setCheckOn] = useState(false);
  const [set , setReset] =useState(false)
  
  return (
    <>
      <h1 className="h1">Box Shodow UI</h1>
      <div className="App">
        <div className=" controls">
          <label>Horizontal Length</label>
          <input
            type="range"
            min="-200"
            max="200"
            value={hori}
            onChange={(e) => setHori(e.target.value)}
          />
          <label>Verticali Length</label>
          <input
            type="range"
            min="-200"
            max="200"
            value={ver}
            onChange={(e) => setVer(e.target.value)}
          />
          <label>Blur</label>
          <input
            type="range"
            min="0"
            max="200"
            value={blur}
            onChange={(e) => setBlur(e.target.value)}
          />
          <label className="button">Color </label>
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <div class="button switch">
            <label>
              Outline
              <input
                type="checkbox"
                checked={checkOn}
                onChange={() => setCheckOn(!checkOn)}
              />
              <span class="lever"></span>
              insert
            </label>
          </div>
      <button className="button waves-effect waves-light btn" type="reset" value={set} onChange={(e) => setReset(e.target.value)}>Reset</button>

        </div>
        <div className="box-output">
          <div
            className="Box"
            style={{
              boxShadow: ` ${
                checkOn ? "inset" : ""
              } ${hori}px ${ver}px ${blur}px ${color}`,
            }}
          >
            <p className=" p">
              Box-Shodow {hori}px {ver}px {blur}px {color}
            </p>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default App;
