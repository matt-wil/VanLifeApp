import { useState } from 'react'
import Home from "./pages/Home"
import About from "./pages/About"
import Vans from './pages/Vans'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import './App.css'
import CampgroundSearch from '/test'

function App() {
  return (
    <>
    <CampgroundSearch searchQuery="mountain" />
      <BrowserRouter>
        <header className='flex bg-amber-100 p-10 text-gray-700 br-10'>
            <NavLink className="text-4xl" to="/">#VanLife</NavLink>
          <nav className='flex gap-5 m-4 '>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/vans">Vans</NavLink>
          </nav>
        </header>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/vans' element={<Vans />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
