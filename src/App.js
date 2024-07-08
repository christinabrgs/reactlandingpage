import { useEffect, React } from 'react'
import Navbar from './components/navbar'
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Home from './components/pages/home';
import Resume from './components/pages/resume';
import Contact from './components/pages/contact';
import Portfolio from './components/pages/portfolio';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      {location.pathname !== '/' && <Navbar />}
      <Routes>
        <Route path='/' exact element={<Home />}></Route>
        <Route path='/portfolio' exact element={<Portfolio />}></Route>
        <Route path='/resume' exact element={<Resume />}></Route>
        <Route path='/contact' exact element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}
