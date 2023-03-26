
import "./App.css";
import ContactForm from "./assets/components/ContactForm";
import Sound from "./assets/sound.wav";

function App() {
  const playSound = () => {
    const audio = new Audio(Sound);
    audio.play();
  };

  return (
    <div className="App">
      <header className="App-header">
        <ContactForm />
        <button onClick={playSound}>Play Sound</button>
      </header>
    </div>
  );
}

export default App;
