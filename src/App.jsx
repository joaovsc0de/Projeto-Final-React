import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import "../src/styles/global.css";
import { AuthProvider } from "./contexts/AuthContext";


function App() {
  return (
    <>

    
      <BrowserRouter>
        <AuthProvider>
          <AppRouter />
          </AuthProvider>
      </BrowserRouter>
      
      
    </>
  );
}
export default App;
