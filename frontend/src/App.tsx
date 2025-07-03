
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Register from './components/Register'
import Signin from './components/Signin'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import ProductDetails from './components/ProductDetails'
import { ThemeProvider } from './components/theme-provider'
import Footer from './components/Footer'

function App() {
  
  return (
    <ThemeProvider>
    <BrowserRouter>
       <Navbar/>
       <Routes>

         <Route path='/product' element={<ProductDetails/>}/>
         <Route path='/'  element={<Landing/>}/>
         <Route path="/register" element={<Register/>} />
         <Route path="/signin" element={<Signin/>} />
        
       </Routes>
       <Footer/>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
