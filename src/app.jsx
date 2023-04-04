import { Outlet } from 'react-router-dom';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
export function App() {

  return (
    <div className='w-[90%] md:w-[80%] mx-auto'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}
