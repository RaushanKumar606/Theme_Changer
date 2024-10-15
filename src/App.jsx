// App.js
import  { useContext } from "react";
import { ThemeContext } from "./component/Theme_che";


function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`app-container ${theme}`}>
    <h1>{theme === "light" ? "Light Theme" : "Dark Theme"}</h1>
   
    <button onClick={toggleTheme}>Theme Changer</button>
  </div>
  
  );
}

export default App;
