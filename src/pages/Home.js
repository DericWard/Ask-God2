/* eslint-disable */
import Sound from "../assets/sound.wav";
import { Link } from "react-router-dom";
import "../index.css";

function Home() {
  const playSound = () => {
    const audio = new Audio(Sound);
    audio.play();
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* <button onClick={playSound}>TITLE PAGE HERE</button> */}
      </header>
      <a href="/ask">
      <div className='header-section AskGod parent-element'>
          <div className="Ask omfg mobile-font-size">ASK</div>
          <div className="God omfg mobile-font-size">GOD!</div>
      </div>
        </a>
    </div>
  );
}

export default Home;
