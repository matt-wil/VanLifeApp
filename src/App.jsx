import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans"
import VanDetail from "./pages/VanDetail"
import CampgroundSearch from './pages/Campsites'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import './App.css'

function App() {
  return (
    <>
    <CampgroundSearch searchQuery="mountain" />
      <BrowserRouter>
        <header className='flex rounded-2xl bg-amber-200 p-10 text-gray-700'>
            <NavLink className="text-4xl" to="/">#VanLife</NavLink>
          <nav className='flex justify-end gap-5 m-4 ml-auto'>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/vans">Vans</NavLink>
            <NavLink to="/campsites">Campsites</NavLink>
          </nav>
        </header>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/vans' element={<Vans />}/>
          <Route path="/vans/:id" element={<VanDetail />} />
          <Route path='/campsites' element={<CampgroundSearch />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
