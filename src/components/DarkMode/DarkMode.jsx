import React from "react";
import "./DarkMode.css";

/**
 * Const para selecionar darkmode
 */

const DarkMode = () => {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };

  /**
   * Const para selecionar lightmode
   */

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };

  /**
   * Condicao inseriada para o darkmode
   * se for a primeira visita sera null, caso contratio dark
   */
  const selectTheme = localStorage.getItem("selectedTheme");
  if (selectTheme === "dark" || selectTheme === null) {
    setDarkMode();
  }

  /**
   * Logica definida
   * usando if e else para selecionar
   * cor light or dark
   */

  const toggleTheme = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
        defaultChecked={selectTheme === "dark"}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle"></label>
    </div>
  );
};
export default DarkMode;
