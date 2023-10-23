import { useCallback } from "react";
import "./SPLASH.css";

const SPLASH = () => {
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
    </main>
  );
};

export default SPLASH;
