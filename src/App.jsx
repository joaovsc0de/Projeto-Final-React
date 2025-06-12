import { BrowserRouter as Browser} from 'react-router-dom'
import AppRouter from './routes/AppRouter'
import "./styles/global.css"

function App() {

  return (
    <>
      <Browser>
        <AppRouter/>
      </Browser>
    </>
  )
}

export default App
