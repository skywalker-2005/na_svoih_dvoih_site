import "./styles/style.css";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import MapPage from './pages/MapPage';
import Oopt from './pages/Oopt';
import RouteInfo from './pages/RouteInfo';
import About from './pages/About';
import OoptInfo from './pages/OoptInfo';

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/mapPage' element={<MapPage />}/>
          <Route path='/oopt' element={<Oopt />}/>
          <Route path='/routeInfo/:type' element={<RouteInfo />}/>
          <Route path='/ooptInfo/:type' element={<OoptInfo />}/>
          <Route path='/about' element={<About />}/>
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
