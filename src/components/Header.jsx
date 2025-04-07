import { NavLink } from "react-router-dom"
const Header = () => {
  return (
    <header className='flex rounded-2xl bg-amber-200 p-10 text-gray-700'>
        <NavLink className="text-4xl" to="/">#VanLife</NavLink>
            <nav className='flex justify-end gap-5 m-4 ml-auto'>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/vans">Vans</NavLink>
              <NavLink to="/campsites">Campsites</NavLink>
            </nav>
    </header>
  )
}

export default Header