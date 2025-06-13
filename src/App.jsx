import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import DarkMode from "./components/DarkMode/DarkMode";
import "../src/styles/global.css";

function App() {
  return (
    <>
      <div className="App-header">
        <header>
          <DarkMode />
          <img src="{logo}" className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.jsx</code> e salve para continuar.
          </p>
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        </header>
      </div>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
