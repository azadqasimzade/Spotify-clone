import Auth from "./Navbar/Auth"
import Navigation from "./Navbar/Navigation"

const Navbar = () => {

  return (
    <div className={`h-[3.75rem] bg-transparent flex items-center justify-between px-8 sticky top-0 z-10`}>
      <Navigation/>
      <Auth/>
    </div>
  )
}

export default Navbar