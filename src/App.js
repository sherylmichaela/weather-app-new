import React from "react";
import Search from "./Search";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <h2>
        <Search />
      </h2>
      <a
        href="https://github.com/sherylmichaela/weather-app-new"
        target="_blank"
        rel="noreferrer"
      >
        Open-source Coded
      </a>
      &nbsp;by Sheryl Chee
    </div>
  );
}
