import './App.css';
import Home from './Content/Home';
import Navbar from './NavBar/navbar';
import { Routes, Route, Navigate } from 'react-router-dom';
import Footer from './footer/footer';
import TestimonialsCarousel from './owl-carousel/owlcarousel';
import CabBooking from './servic/cab-booking';
import Autobooking from './servic/autobooking';
import Login from './login/login';
import Register from './Register/register';
import About from './About/about';
import RideHistory from './RideHistory/ridehistory';
import MyProfile from './MyAccount/myaccount';
import EditProfile from './EditProfile/editprofile';
import AdminLogin from './AdminLogin/adminlogin';
import AdminNavbar from './AdminNav/adminnav';
import AdminPage from './AdminPage/adminpage';
import { useEffect, useState } from 'react';

function App() {
    const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(localStorage.getItem('isAdminLoggedIn') === 'true');

    const handleAdminLogin = () => {
        setIsAdminLoggedIn(true);
        localStorage.setItem('isAdminLoggedIn', 'true');
    };

    const handleAdminLogout = () => {
        localStorage.removeItem('isAdminLoggedIn');
        setIsAdminLoggedIn(false);
    };

    return (
        <div className='App'>
            {isAdminLoggedIn ? <AdminNavbar onLogout={handleAdminLogout} /> : <Navbar />}
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
                <Route path='/login' element={<Login onLogin={handleAdminLogin} />} />
                <Route path='/register' element={<Register />} />
                <Route path='/cab-booking' element={<CabBooking />} />
                <Route path='/autobooking' element={<Autobooking />} />
                <Route path='/about' element={
                    <>
                        <About />
                        <Footer />
                    </>
                } />   
                <Route path='/myaccount' element={<MyProfile />} />
                <Route path='/editprofile' element={<EditProfile />} />
                <Route path='/ridehistory' element={<RideHistory />} />

                <Route path='/adminlogin' element={<AdminLogin onLogin={handleAdminLogin} />} />
                <Route 
                    path="/adminpage" 
                    element={isAdminLoggedIn ? <AdminPage onLogout={handleAdminLogout} /> : <Navigate to="/adminlogin" />} 
                />
            </Routes>
        </div>
    );
}

export default App;
