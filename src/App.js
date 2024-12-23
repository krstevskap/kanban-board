import { createContext, useState, useEffect } from "react";
import "./App.css";
import Board from "./components/Board/Board";

export const ThemeContext = createContext();

function App() {
  const storedTheme = localStorage.getItem("theme") || "light";
  const [theme, setTheme] = useState(storedTheme);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const changeTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <div className="App" id={theme}>
        <Board />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
