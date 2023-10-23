import { useCallback } from "react";
import "./FORMPLANNER.css";

const FORMPLANNER = () => {
  const onButtonGenerateClick = useCallback(() => {
    // Please sync "PLANNERRESULTS" to the project
  }, []);

  return (
    <div className="formplanner">
      <div className="onboarding-backgroundmask" />
      <main className="bg">
        <div className="bg-child" />
        <div className="bg-item" />
        <div className="bg-inner" />
        <div className="ellipse-div" />
        <div className="bg-child1" />
        <img className="group-icon" alt="" src="/group-287.svg" />
        <div className="bg-child2" />
        <div className="bg-child3" />
      </main>
      <img
        className="cogentlogo-white-1-icon"
        alt=""
        src="/cogentlogo-white-1.svg"
      />
     
      <div className="modalcontainerrounded">
        <div className="modalcontainerrounded-inner">
          <img className="frame-child" alt="" src="/rectangle-3.svg" />
        </div>
        <b className="welcome-to-lesta-container">
          <span>Welcome to</span>
          <span className="span">{` `}</span>
          <span className="biz-strategy-planner">Biz Strategy Planner</span>
        </b>
        <div className="enter-your-registered">
          Dive into the Biz Strategy Planner and navigate your business's future
          with clarity and confidence
        </div>
        <button
          className="buttongenerate"
          id="btnGenerate"
          onClick={onButtonGenerateClick}
        >
          <div className="buttongenerate-child" />
          <div className="log-in-wrapper">
            <div className="log-in">Generate</div>
          </div>
        </button>
        <img
          className="modalcontainerrounded-child"
          alt=""
          src="/group-553.svg"
        />
      </div>
      <div className="formcontainer">
        <div className="txtdepartment">
          <div className="txtdepartment-inner">
            <div className="password-parent">
              <div className="password">Department</div>
              <input
                className="frame-item"
                placeholder="Enter your number of employees"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="txtdepartment">
          <div className="txtdepartment-inner">
            <div className="password-parent">
              <div className="password">Company Size</div>
              <input
                className="frame-item"
                placeholder="Enter your number of employees"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="txtdepartment">
          <div className="password-parent">
            <div className="password">Sector</div>
            <input
              className="frame-item"
              placeholder="Enter your sector"
              type="text"
            />
          </div>
        </div>
        <div className="txtdepartment">
          <div className="txtdepartment-inner">
            <div className="password-parent">
              <div className="password">Particular Need ?</div>
              <textarea
                className="frame-textarea"
                placeholder="Share your idea here!"
                cols={5}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FORMPLANNER;
