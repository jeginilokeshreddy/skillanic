import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Loginpage from "../pages/loginpage/Login"
import Sidebar from '../pages/sidebar/Sidebar';
import Dashboard from '../pages/dashboard/Dashboard';
import Order from '../pages/ordermanagement/Order';
import Forgot from '../pages/forgot/Forgot';
import Hostelmanagement from '../pages/hostelmanagement/Hostelmanagement';
import Home from '../Home';
import Contact from '../Contact';
import About from '../About';
import Navbar from '../Navbar';
export default function Pagecalling() {
  return (
    <div className='routes-section'>
      {/* <Loginpage />
      <Sidebar />
      <Dashboard />
      <Order />
      <Forgot /> */}
      <BrowserRouter>
      <Routes>
          {/* <Route path="sidebar" element={<Sidebar />}> */}
          <Route path="/" element={<Loginpage />}/>
          <Route path="sidebar" element={<Sidebar />}>
            <Route index  element={<Dashboard/>}/>
          <Route path='Order' element={<Order />} />
          <Route path='forgot' element={<Forgot />} />
          </Route>
      </Routes>
      </BrowserRouter>
      
      {/* <Home/> */}
      {/* <Contact/>
      <About/> */}
      
    </div>
  )
}
