import React from 'react'
import Navbar from './components/navbar'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/home';
import Products from './components/pages/products';
import Services from './components/pages/services';
import SignUp from './components/pages/signup';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />}></Route>
          <Route path='/services' exact element={<Services />}></Route>
          <Route path='/products' exact element={<Products />}></Route>
          <Route path='/sign-up' exact element={<SignUp />}></Route>

        </Routes>
      </Router>
    </>
  );
}

export default App;
