import { Icon } from "../icons"
import { NavLink } from "react-router-dom"

const Menu = () => {

  return (
    <nav className="px-2">
        <ul className="flex flex-col">
            <li>
                <NavLink to="/" activeClassName="bg-active text-white" exact className="h-10 flex items-center gap-x-4 text-sm rounded font-semibold text-link hover:text-white transition-colors px-4">
                    <span><Icon name='homeActive' size={24}/></span>
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink to="/search" activeClassName="bg-active text-white" className="h-10 flex items-center gap-x-4 text-sm rounded font-semibold text-link hover:text-white transition-colors px-4">
                    <span><Icon name='search' size={24}/></span>
                    Search
                </NavLink>
            </li>
            <li>
                <NavLink to="/collection" activeClassName="bg-active text-white" className="h-10 flex items-center gap-x-4 text-sm rounded font-semibold text-link hover:text-white transition-colors px-4">
                    <span><Icon name='collection' size={24}/></span>
                    Your Library
                </NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Menu