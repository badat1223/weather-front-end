import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { WeatherForecast } from "./components/weather-forecast";
//import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <WeatherForecast />
      </header>
    </div>
  );
}

export default App;
