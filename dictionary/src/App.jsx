import { useState } from "react";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <h1>Dictionary App</h1>
          <Dictionary />
        </main>
        <footer className="Footer">Coded by Jenny P. </footer>
      </div>
    </div>
  );
}
