import Navbar from "./Navbar"
import {Switch, Route} from 'react-router-dom'
import Home from "./pages/Home"
import Search from "./pages/Search"
import Collection from "./pages/Collection"

const Contetnt = () => {

  return (
    <main className="flex-auto overflow-auto">
      <Navbar/>
      <div className="px-8 py-5">
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/search">
            <Search/>
          </Route>
          <Route path="/collection">
            <Collection/>
          </Route>
        </Switch>
      </div>
    </main>
  )
}

export default Contetnt