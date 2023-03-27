/* eslint-disable */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "./pages/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Ask from "./pages/Ask.js";
import History from "./pages/History";
import axios from 'axios';


function App() {

// API call for random quotes
  const getQuote = () => {
    axios.get('https://api.quotable.io/random')
    .then((response) => {
    console.log(response.data.content);
    console.log(response.data.author);
})
    .catch((error) => {
    console.log(error);
})
  }


  
  return (
    <Router>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ask" element={<Ask />} />
        <Route path="/history" element={<History />} />
      </Routes>
      <button onClick={getQuote}>Get Quote</button>
    </Router>
  );
}

export default App;
