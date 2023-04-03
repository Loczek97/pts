import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/navbar/Navbar';
import Main from './Main';
import Footer from './components/footer/Footer';
import './assets/css/tailwind.css'
import './assets/css/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Main />
    <Footer />
  </React.StrictMode>
);
