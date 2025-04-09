import Home from "./pages/Home"
import About from "./pages/About"
import Vans from "./pages/Vans/Vans"
import VanDetail from "./pages/Vans/VanDetail"
import CampgroundSearch from './pages/Campsites'
import Layout from "./components/Layout"
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import './App.css'
import HostLayout from "./components/HostLayout"  
import Dashboard from "./pages/Host/Dashboard"
import Income from "./pages/Host/Income"
import Reviews from "./pages/Host/Reviews"
import HostVans from "./pages/Host/HostVans"
import HostVanDetail from "./pages/Host/HostVanDetail"
import HostVanInfo from "./pages/Host/HostVanInfo"
import HostVanPricing from "./pages/Host/HostVanPricing"
import HostVanPhotos from "./pages/Host/HostVanPhotos"
import NotFound from "./pages/NotFound"
import "./server"
import AuthRequired from "./pages/AuthRequired"
import Login from "./pages/Login"



    function App() {
      return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path='/campsites' element={<CampgroundSearch />}/>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="vans" element={<Vans />} />
              <Route path="vans/:id" element={<VanDetail />} />
              <Route path="login" element={<Login/>} />
              
              {/** Protected Routes */}
              <Route element={<AuthRequired />}>
              <Route path="host" element={<HostLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="income" element={<Income />} />
                <Route path="reviews" element={<Reviews />} />
                <Route path="vans" element={<HostVans />} />
                <Route path="vans/:id" element={<HostVanDetail />}>
                  <Route index element={<HostVanInfo />} />
                  <Route path="pricing" element={<HostVanPricing />} />
                  <Route path="photos" element={<HostVanPhotos />} />
                </Route>
              </Route>
              </Route>
              {/** End Protected Routes */}

              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )
    }

export default App
