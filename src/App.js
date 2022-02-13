import "./App.css";
import Homepage from "./pages/Homepage";
import GlobalStyle from "./globalStyles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Locations from "./pages/Locations";
import Contact from "./pages/Contact";
import GraphicDesign from "./pages/GraphicDesign";
import WebDesign from "./pages/WebDesign";
import AppDesign from "./pages/AppDesign";

function App() {
  return (
    <Router>
      <div className="App">
        <GlobalStyle />

        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/location" element={<Locations />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/graphic-design" element={<GraphicDesign />} />
          <Route path="/web-design" element={<WebDesign />} />
          <Route path="/app-design" element={<AppDesign />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


