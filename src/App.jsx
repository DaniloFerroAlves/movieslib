import { Outlet } from 'react-router-dom'
import './App.css'
import { Navbar } from './components/Navbar'


function App() {
  //Vai renderizar a página conforme a rota
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default App
