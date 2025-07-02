
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Register from './components/Register'
import Signin from './components/Signin'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import Footer from './components/Footer'

function App() {
  
  return (
    <BrowserRouter>
      <Navbar/>
       <Routes>
        <Route path='/'  element={<Landing/>}/>
         <Route path="/register" element={<Register/>} />
         <Route path="/signin" element={<Signin/>} />
       </Routes>
       <Footer/>
    </BrowserRouter>
  )
}

export default App
