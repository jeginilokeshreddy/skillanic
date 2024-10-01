import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Loginpage from "../pages/loginpage/Login"

export default function Pagecalling() {
  return (
    <div className='routes-section'>
      <BrowserRouter>
      <Routes>
        <Route path="loginpage" element={<Loginpage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}
