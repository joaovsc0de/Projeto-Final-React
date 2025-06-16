import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import "../src/styles/global.css";
import ThemeProvider from "./contexts/ThemeContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <ThemeProvider>
          <AppRouter />
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}
export default App;
