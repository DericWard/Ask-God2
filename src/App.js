/* eslint-disable */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "./pages/Header";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Ask from "./pages/Ask.js";
import History from "./pages/History";

function App() {
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
    </Router>
  );
}

export default App;
