import React from "react";
import logo from "./logo.svg";
import StudentInfo from './Components/StudentInfo'
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StudentInfo />
        <StudentInfo />
      </header>
    </div>
  );
}

export default App;
