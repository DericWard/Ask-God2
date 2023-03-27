/* eslint-disable */
import Sound from "../assets/sound.wav";

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

      <div className='header-section AskGod'>
          <div className="Ask omfg" style={{ fontSize: '380px', paddingTop: "0px" }}>ASK</div>
          <div className="God omfg" style={{ fontSize: '380px', paddingTop: "0px" }}>GOD!</div>
        </div>
    </div>
  );
}

export default Home;
