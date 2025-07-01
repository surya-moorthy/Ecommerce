
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Register from './components/Register'
import Signin from './components/Signin'

function App() {
  
  return (
    <BrowserRouter>
       <Routes>
         <Route path="/register" element={<Register/>} />
         <Route path="/signin" element={<Signin/>} />
       </Routes>
    </BrowserRouter>
  )
}

export default App
