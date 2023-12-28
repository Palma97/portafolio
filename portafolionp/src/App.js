import { Route, Routes, useLocation } from "react-router-dom";
import { LandingPage } from "./Components/Landing/LandingPage";
import { AboutMe } from "./Components/About/AboutMe";
import { Home } from "./Components/Home/Home";
import { Navbar } from "./Components/Navbar/Navbar";
import { Projects } from "./Components/Projects/Projects";
import { Contact } from "./Components/Contact/Contact";
import "./App.css";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/" && <Navbar />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
