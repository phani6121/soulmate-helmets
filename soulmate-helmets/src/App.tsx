// App.tsx
import React from 'react';
import { Route, Routes, useLocation } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/Layout/Navbar';
import Dashboard from './components/Pages/Dashboard';
import Login from './components/Pages/Login';
import Signin from './components/Pages/Signin';
import Accessories from './components/Pages/Accessories';
import About from './components/Pages/About';
import Warranty from './components/Pages/Warranty';
import Helmets from './components/Pages/Helmets';
import Addhelmets from './components/Pages/Addhelmets';
import Purchase from './components/Pages/Purchase';
import Addaccessories from './components/Pages/Addaccessories';
import ForgotPassword from './components/Pages/ForgotPassword';
import Contact from './components/Pages/Contact';

const App: React.FC = () => {
  const location = useLocation();
  const isLoginOrSignin = location.pathname === '/login' || location.pathname === '/signin' || location.pathname === '/addhelmets' || location.pathname === '/purchase' || location.pathname === '/addaccessories' || location.pathname === '/forgotPassword';

  return (
    <div className="App" style={{ marginTop: "65px", padding: "0px" }}>
      <ToastContainer />
      {/* Render Navbar for all pages except Login and Signin */}
      {!isLoginOrSignin && <Navbar />}
      <section >
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/' element={<Dashboard />} />
          <Route path='/helmets' element={<Helmets />} />
          <Route path='/accessories' element={<Accessories />} />
          <Route path='/about' element={<About />} />
          <Route path='/warranty' element={<Warranty />} />
          <Route path='/addhelmets' element={<Addhelmets />} />
          <Route path='/purchase' element={<Purchase />} />
          <Route path='/addaccessories' element={<Addaccessories />} />
          <Route path='/forgotPassword' element={<ForgotPassword />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </section>
    </div>
  );
}

export default App;
