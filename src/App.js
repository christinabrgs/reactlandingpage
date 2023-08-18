import React from 'react'
import Navbar from './components/navbar'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/home';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
