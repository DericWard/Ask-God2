/* eslint-disable */
import Sound from "../assets/sound.wav";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function Home() {
  const playSound = () => {
    const audio = new Audio(Sound);
    audio.play();
  };

  useEffect(() => {
    playSound();
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>
      <Link to="/ask" className='header-section AskGod'>
        <div className="header-section AskGod">
          <div
            className="Ask omfg"
            // style={{ fontSize: "380px", paddingTop: "0px" }}
          >
            ASK
          </div>
          <div
            className="God omfg"
            // style={{ fontSize: "380px", paddingTop: "0px" }}
          >
            GOD!
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Home;
