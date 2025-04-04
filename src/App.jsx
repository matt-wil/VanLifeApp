import Home from "./pages/Home"
import About from "./pages/About"
import CampgroundSearch from './pages/Campsites'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import './App.css'

function App() {
  return (
    <>
    <CampgroundSearch searchQuery="mountain" />
      <BrowserRouter>
        <header className='flex bg-amber-100 p-10 text-gray-700 br-10'>
            <NavLink className="text-4xl" to="/">#VanLife</NavLink>
          <nav className='flex gap-5 m-4 '>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/campsites">Campsites</NavLink>
          </nav>
        </header>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/campsites' element={<CampgroundSearch />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
