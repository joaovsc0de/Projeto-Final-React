// src/components/DarkMode/DarkMode.js
import React, { useEffect } from "react"; // Importe useEffect
import "./DarkMode.css"; // Seus estilos para o toggle

/**
 * Componente para alternar entre modo claro e escuro.
 */
const DarkMode = () => {

  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
    localStorage.setItem("selectedTheme", "dark");
  };

  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
    localStorage.setItem("selectedTheme", "light");
  };

  // useEffect para aplicar o tema salvo ao carregar a página
  useEffect(() => {
    const selectedTheme = localStorage.getItem("selectedTheme");
    // Se não há tema salvo ou o tema salvo é "light", aplica light mode.
    // Caso contrário (se for "dark"), aplica dark mode.
    if (selectedTheme === "dark") {
      setDarkMode();
    } else { // Inclui 'null' (primeira visita) e 'light'
      setLightMode();
    }
  }, []); // O array vazio garante que isso rode apenas uma vez ao montar

  /**
   * Lógica para alternar o tema com base no estado do checkbox.
   */
  const toggleTheme = (e) => {
    if (e.target.checked) {
      setDarkMode();
    } else {
      setLightMode();
    }
  };

  // Determine o estado inicial do checkbox com base no tema salvo
  const isDarkModeDefault = localStorage.getItem("selectedTheme") === "dark";

  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
        defaultChecked={isDarkModeDefault} // Define o estado inicial do checkbox
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle"></label>
    </div>
  );
};

export default DarkMode;