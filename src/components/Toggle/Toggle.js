import React, { useState, useContext } from "react";
import { GoMoon } from "react-icons/go";
import { GrSun } from "react-icons/gr";
import "./toggle.css";
import { ThemeContext } from "../../App";

const Toggle = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { changeTheme } = useContext(ThemeContext);

  const changeIcon = () => {
    setDarkMode((prev) => !prev);
    changeTheme();
  };

  return (
    <div className="toggle-container" onClick={changeIcon}>
      {darkMode ? <GrSun id="sun" /> : <GoMoon id="moon" />}
    </div>
  );
};

export default Toggle;
