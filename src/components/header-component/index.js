import React, { useState } from "react";
import image from "../../static/images/logo/LogoPNG2.png";
import { Header } from "./Header";

export function HeaderMain() {

  const [customShadow, setCustomShadow] = useState("");

  window.onscroll = (e) => {
    const scrollPosition = window.scrollY;
    if (scrollPosition >= 100) {
      setCustomShadow("shadow")
    } else {
      setCustomShadow("")
    }

  }
  return (
    <div className={`header-section ${customShadow}`}>
      <Header logo={image} />
    </div>
  );
}

