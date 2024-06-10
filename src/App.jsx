// src/App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RouterComponent from './components/RouterComponent';
import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Navbar />
      <div className="content">
        <RouterComponent />
      </div>
      <Footer />
    </Router>
  );
};

export default App;
