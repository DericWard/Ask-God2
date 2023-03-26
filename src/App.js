/* eslint-disable */
import "./App.css";
import Sound from "./assets/sound.wav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "./pages/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact"
import Ask from "./pages/Ask.js"



function App() {
  const playSound = () => {
    const audio = new Audio(Sound);
    audio.play();
  };

  return (
    <Router>
    <ResponsiveAppBar />
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/ask" element={<Ask />} />
    </Routes>
  </Router>
  );
}

export default App;
