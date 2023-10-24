import { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./SPLASH.css";

const SPLASH = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/planner");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  const onSPLASHClick = useCallback(() => {
    // Please sync "FORMPLANNER" to the project
  }, []);

  return (
    <main className="splash" onClick={onSPLASHClick}>
      <div className="splash-backgroundmask" />
      <img className="bg-icon" alt="" src="/bg.svg" />
      <img className="layer-2-icon" alt="" src="/layer-2.svg" />
      <div className="situated-in-purwokerto">
        Dive into strategic brilliance with the Biz Strategy Planner. Chart your
        course to success and beyond. Welcome aboard!
      </div>
      <div className="spinner"></div>  {/* Add the spinner here */}
    </main>
  );
};

export default SPLASH;
