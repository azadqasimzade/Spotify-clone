import Sidebar from "./Components/Sidebar"
import Contetnt from "./Components/Contetnt"
import Footer from "./Components/Footer"
import {BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Sidebar/>
        <Contetnt/>
      </div>
      <Footer/>
    </Router>
  )
}

export default App
