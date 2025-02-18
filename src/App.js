import { useEffect, React } from 'react'
import Navbar from './components/navbar'
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Home from './components/pages/home';
import Resume from './components/pages/resume';
import Contact from './components/pages/contact';
import Portfolio from './components/pages/portfolio';
import Explore from './components/pages/explore';
import Coached from './components/pages/coached';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />}></Route>
        <Route path='/portfolio' exact element={<Portfolio />}></Route>
        <Route path='/resume' exact element={<Resume />}></Route>
        <Route path='/contact' exact element={<Contact />}></Route>
        <Route path='/explore' exact element={<Explore />}></Route>
        <Route path='/coached' exact element={<Coached />}></Route>

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
