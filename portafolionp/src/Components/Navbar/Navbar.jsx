import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="home">
      <div className="homee">
        <Link to="/home">Home</Link>
      </div>
      <div className="about">
        <Link to="/aboutme">About</Link>
      </div>
      <div className="projects">
        <Link to="/projects">Projects</Link>
      </div>
      <div className="contact">
        <Link to="/contact">Contact me</Link>
      </div>
    </div>
  );
};
