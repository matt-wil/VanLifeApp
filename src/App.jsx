import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans"
import VanDetail from "./pages/VanDetail"
import CampgroundSearch from './pages/Campsites'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import './App.css'
import "./server"

function App() {
  return (
    <>
    <CampgroundSearch searchQuery="mountain" />
      <BrowserRouter>
        <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/vans' element={<Vans />}/>
          <Route path="/vans/:id" element={<VanDetail />} />
          <Route path='/campsites' element={<CampgroundSearch />}/>
        </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
