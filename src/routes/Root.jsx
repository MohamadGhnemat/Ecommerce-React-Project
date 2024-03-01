
import Navbar from "../components/Navbar/Navbar"
import { Outlet } from "react-router-dom"
// import Footer from './../components/Footer/components/Footer';


function Root() {
  return (
    <div>
      <Navbar />
      <Outlet />
   
    </div>
  )
}

export default Root
