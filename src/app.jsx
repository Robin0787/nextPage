import { Outlet, useNavigation } from 'react-router-dom';
import Footer from './Components/Footer';
import LoadingSpinner from './Components/LoadingSpinner';
import Navbar from './Components/Navbar';
export default function App() {
  const navigation = useNavigation();
  return (
    <div className='w-[90%] mx-auto'>
      <Navbar />
      <div className='min-h-[calc(100vh-144px)]'>
      {
        navigation.state === 'loading'? <LoadingSpinner /> : <Outlet />
      }
      {/* <Outlet /> */}
      </div>
      <Footer />
    </div>
  )
}

