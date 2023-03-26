/* eslint-disable */
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ResponsiveAppBar from "./pages/Header";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
