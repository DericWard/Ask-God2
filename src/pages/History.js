import * as React from "react";
import Sound from "../assets/sound.wav";

function History() {
  
    const playSound = () => {
        const audio = new Audio(Sound);
        audio.play();
      };
    
      return (
        <div className="App">
          <header className="App-header">
            <button onClick={playSound}>TITLE PAGE HERE</button>
          </header>
        </div>
      );
    }
export default History;
