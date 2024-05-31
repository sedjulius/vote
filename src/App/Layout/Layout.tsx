
import Navbar from './navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './footer/Footer'
export default function Layout() {

  return (
    <div>
      <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
      </div>  
    </div>
  )
}
