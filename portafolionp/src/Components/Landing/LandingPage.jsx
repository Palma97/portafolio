import "./LandingPage.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/home");
    }, 4000);
  }, []);

  return (
    <div className="bodyLanding">
      <div className="mouseImage"></div>;
    </div>
  );
};
