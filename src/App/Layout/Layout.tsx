
import Navbar from './navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './footer/Footer'
export default function Layout() {

  return (

    <div className=''>
      <div className='z-10 sticky top-0'>
        <Navbar />
      </div>
      <Outlet/>
      <Footer/>
    </div>
  )
}
