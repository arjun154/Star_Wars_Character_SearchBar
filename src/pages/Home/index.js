import React from "react";
import logo from "./star-wars-logo.png";
import "./index.css";
import Searchbox from "../../Components/SearchBox";

function HomePage() {
  return (
    <div>
      <div>
        <div className="logo">
          <img src={logo} alt="Star Wars Logo" />
        </div>
        <Searchbox />
      </div>
    </div>
  );
}

export default HomePage;
