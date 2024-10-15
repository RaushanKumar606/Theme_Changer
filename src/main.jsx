
import ReactDOM from "react-dom/client"; // Updated import
import { ThemeProvider } from "./component/Theme_che";
import App from './App'; // Ensure you import the App component
import './App.css';

// Create root and render the app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

