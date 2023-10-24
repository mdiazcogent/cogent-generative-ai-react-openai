import React from 'react';
/* import './PLANNERRESULTS.css'; */
import './FORMPLANNER.css';

const PLANNERRESULTS = () => {
    return (

      <div className="app-container">
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
            <div className="form-container">
            
                <div className="logo">
                <img alt="" src="/cogentlogo-white-1.svg"/>
                </div>
               
                <form className='form-border'>
                    <div className="header">
                        <h4> <span className='orange-text'> Biz Strategy</span> <span className='blue-text'> Planner</span></h4>
                        <p>Consider implementing these strategies:</p>
                    </div>
                    <div className="strategy-list">
                      <div className="strategy-item">
                          <div className="header-wrapper">
                            <h5 className='blue-text strategy-title'>Digital Integration</h5>
                            <span className="rating">⭐ 5.0</span>
                          </div>
                          <p className='strategy-desc'>Leverage emerging technologies to optimize operations and reach a broader audience</p>
                          
                      </div>
                    </div>
                </form>
            </div>
            </div>
    );
}

export default PLANNERRESULTS;
