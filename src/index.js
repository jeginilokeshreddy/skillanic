import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagecalling from './pagecalling/Pagecalling';
import Condition from "./javascript/Condition"
import Homepagecss from './pages/homepagecss/Homepagecss';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Condition/> */}
<Homepagecss/>
   {/* <Pagecalling/> */}
  </React.StrictMode>
);


reportWebVitals();
