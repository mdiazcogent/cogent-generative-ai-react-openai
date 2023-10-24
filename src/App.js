import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import FORMPLANNER from "./pages/FORMPLANNER";

// Step 1: Import the new pages
import SPLASH from "./pages/SPLASH";
import PLANNERRESULTS from "./pages/PLANNERRESULTS";
//... import other pages as needed

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/splash":
        title = "Page 1 Title";
        metaDescription = "Description for Page 1";
        break;
      case "/results":
        title = "Page 2 Title";
        metaDescription = "Description for Page 2";
        break;
      //... add cases for other pages as needed
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={< SPLASH />} />
      {/* Step 2: Add Route components for the new pages */}
      <Route path="/planner" element={<FORMPLANNER />} />
      <Route path="/results" element={<PLANNERRESULTS />} />
      {/*... add routes for other pages as needed */}
    </Routes>
  );
}

export default App;
