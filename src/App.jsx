import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './pages/Login'
import Canteen from './pages/Canteen'
import Details from './pages/Details'
import Cart from './pages/Cart'
import Footer from './Components/Footer'

function App() {

  return (
     <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/canteen' element={<Canteen />}></Route>
      <Route path='/details' element={<Details />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
     </Routes>
  )
}

export default App
