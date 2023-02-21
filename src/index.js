import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './navbar/Navbar';
import Main from './content/Main';
import Footer from './content/footer/Footer';
import './tailwind.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Main />
    <Footer />
  </React.StrictMode>
);
