import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import List from './List'
import Header from './Header';
import Banner from './Banner';
import Feature from './Features';
import State from './State';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

{/*   
   <Header/>
   <Banner/>
   <Feature/> */}
   <State/>
    

   
  </React.StrictMode>
);


reportWebVitals();
