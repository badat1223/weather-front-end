import React from "react";
import "./assets/css/animate.min.css";
import "./assets/scss/light-bootstrap-dashboard-react.scss";
import "./assets/css/demo.css";
import "./App.css";
import { WeatherForecast } from "./components/weather-forecast";
//import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App wrapper">
        <div className="App-header wrapper">
          <div className="main-panel">
            <div className="content">
              <WeatherForecast />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
