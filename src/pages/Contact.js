/* eslint-disable */
import ContactForm from "../assets/components/ContactForm/index.js";
import Sound from "../assets/sound.wav";


function Contact() {
  const playSound = () => {
    const audio = new Audio(Sound);
    audio.play();
  };

  return (
    <div className="App">
      <header className="App-header">
        <ContactForm />
      </header>
    </div>
  );
}

export default Contact;
