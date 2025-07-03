
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Register from './components/Register'
import Signin from './components/Signin'
import Navbar from './components/Navbar'
import Landing from './components/Landing'
import { ThemeProvider } from './components/theme-provider'
import Footer from './components/Footer'
import CheckoutForm from './components/CheckoutForm'
import Products from './components/Products'

function App() {
  
  return (
    <ThemeProvider>
    <BrowserRouter>
       <Navbar/>
       <Routes>
         <Route path='/product' element={<Products/>}/>
         <Route path='/'  element={<Landing/>}/>
         <Route path="/register" element={<Register/>} />
         <Route path="/signin" element={<Signin/>} />
         <Route path="/checkout/:id" element={<CheckoutForm/>}/>
       </Routes>
       <Footer/>
       <Routes>
        
       </Routes>
    </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
