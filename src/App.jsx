import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import DarkMode from "./components/DarkMode/DarkMode";
import "../src/styles/global.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
}
// console.log("oi");
export default App;
