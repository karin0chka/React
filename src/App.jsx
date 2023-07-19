import React from "react";
import "./App.css";
import Header from "./components/Header";
import AppBody from "./components/AppBody";
import GitHub from "./components/GitHub";


export default function App() {
  return (
    <div className="App">
      <Header />
      <AppBody />
      <GitHub />
     
    </div>
  );
}
