import { useRouteMatch } from "react-router-dom"
import Auth from "./Navbar/Auth"
import Links from "./Navbar/Links"
import Navigation from "./Navbar/Navigation"
import Search from "./Navbar/Search"

const Navbar = () => {

  const searchRoute = useRouteMatch('/search')
  const collectionRoute = useRouteMatch('/collection')

  return (
    <div className={`h-[3.75rem] flex items-center justify-between px-8 sticky top-0 z-10 backdrop-invert bg-backdrop/70 backdrop-opacity-10`}>
      <Navigation/>
      {searchRoute && <Search/>}
      {collectionRoute && <Links/>}
      <Auth/>
    </div>
  )
}

export default Navbar