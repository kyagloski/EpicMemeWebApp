import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../component/Navbar.js";
import Memes from "../component/Memes.js";
import "../stylesheets/styles.css";
import "../stylesheets/index.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <h1 className="egg" style={{ marginTop: "5px", marginBottom: "8px" }}>
          🍆
        </h1>
      </div>
      <div>
        <Memes />
      </div>
      <Link to="/info" style={{ float: "right", marginRight: "50px" }}>
        about
      </Link>
    </div>
  );
}
