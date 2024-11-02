import './App.css';
import Home from './Content/Home';
import Navbar from './NavBar/navbar';
import { Routes, Route } from 'react-router-dom';
import Footer from './footer/footer';
import TestimonialsCarousel from './owl-carousel/owlcarousel';
import CabBooking from './servic/cab-booking';
import Autobooking from './servic/autobooking';
import Login from './login/login';
import Register from './Register/register';
import About from './About/about';

function App() {
  return (
    <div className='App'>
        <Navbar/>
        <Routes>
            <Route 
                path='/' 
                element={
                    <>
                        <Home />
                        <TestimonialsCarousel />
                        <Footer />
                    </>
                } 
            />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/cab-booking' element={<CabBooking />} />
            <Route path='/autobooking' element={<Autobooking />} />
            <Route path='/about' element={
                <>
                    <About />
                    <Footer />
                </>
            } />   
        </Routes>
    </div>
  );
}

export default App;
