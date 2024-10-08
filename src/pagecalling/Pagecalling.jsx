// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import Loginpage from "../pages/loginpage/Login"
// import Sidebar from '../pages/sidebar/Sidebar';
// import Dashboard from '../pages/dashboard/Dashboard';
// import Order from '../pages/ordermanagement/Order';
// import Forgot from '../pages/forgot/Forgot';
// import Hostelmanagement from '../pages/hostelmanagement/Hostelmanagement';
// import Home from '../Home';
// import Contact from '../Contact';
// import About from '../About';
// import Navbar from '../Navbar';
// export default function Pagecalling() {
//   return (
//     <div className='routes-section'>
      
//       <BrowserRouter>
//       <Routes>
//           {/* <Route path="sidebar" element={<Sidebar />}> */}
//           <Route path="/" element={<Loginpage />}/>
//           <Route path="sidebar" element={<Sidebar />}>
//             <Route index  element={<Dashboard/>}/>
//           <Route path='Order' element={<Order />} />
//           <Route path='forgot' element={<Forgot />} />
//           </Route>
//       </Routes>
//       </BrowserRouter>
      
     
      
//     </div>
//   )
// }

import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Loginpage from "../pages/loginpage/Login";
import Sidebar from '../pages/sidebar/Sidebar';
import Dashboard from '../pages/dashboard/Dashboard';
import Order from '../pages/ordermanagement/Order';
import Forgot from '../pages/forgot/Forgot';

export default function Pagecalling() {
  // Create the router instance
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Loginpage />,
    },
    {
      path: "sidebar",
      element: <Sidebar />,
      children: [
        { index: true, element: <Dashboard /> },
        { path: 'Order', element: <Order /> },
        { path: 'forgot', element: <Forgot /> },
      ],
    },
  ]);

  return (
    <div className='routes-section'>
      {/* Use RouterProvider to provide the router to your app */}
      <RouterProvider router={router} />
    </div>
  );
}
