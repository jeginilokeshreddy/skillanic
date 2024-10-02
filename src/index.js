import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pagecalling from './pagecalling/Pagecalling';
import Condition from "./javascript/Condition"





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Condition/> */}

   <Pagecalling/>
  </React.StrictMode>
);


reportWebVitals();
