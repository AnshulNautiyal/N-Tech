import React from "react";
import image from "../../static/images/logo/LogoPNG2.png";
import Header from "./Header";

function App() {
  return (
    <div className="header-section">
      <Header logo={image} />
    </div>
  );
}

export default App;
