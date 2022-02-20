import React from "react";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss";
import "./assets/css/demo.css";

import "./App.css";
import "./assets/css/main.css";
import { WeatherForecast } from "./components/weather-forecast";
//import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
    <nav className="navbar justify-between">
    <div className="container">
      <h1 className="site-title">Fabio Queiroz</h1>
      <ul className="display-f">
        
      </ul>
    </div>
  </nav>
  <div className="container mt-5">
    <div className="row justify-center">
      <div className="col-12-xs col-5-md">
        <h2>
          <div className="font-xxl">Weather Demo</div>

        </h2>
        <p className="text-gray mt-2 mb-3">A short demosntarting features asked for in the assignment given</p>
        
      </div>
      <div className="col-12-xs col-5-md">
        <img src="src/assets/img/weather.png" alt=""></img>
      </div>
    </div>
  </div>
 
    
    
      <div  className="container mt-5 mb-5">
      <div className="row gap-2 justify-cente">
          <div className="main-panel">
            <div className="content">
              <WeatherForecast />
            </div>
          </div>
        </div>
      </div>
      
      
   
      <footer className="bg-gray-light-7 pt-3 pb-3 mt-5">
    <div className="container">
    Fabio Queiroz 
    </div>
  </footer>
    </>
  );
}

export default App;
