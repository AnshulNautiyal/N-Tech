import React from "react";
import image from "../../static/images/logo/LogoPNG2.png";
import Header from "./Header";
import Landing from "./../main-component";

function App() {
  return (
    <div className="header-section">
      <Header logo={image} />
      <Landing></Landing>
    </div>
  );
}

export default App;
