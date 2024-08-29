import "./styles/style.css";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Map from './pages/Map';
import Oopt from './pages/Oopt';
import RouteInfo from './pages/RouteInfo';
import About from './pages/About';
import OoptInfo from './pages/OoptInfo';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/map' element={<Map />}/>
          <Route path='/oopt' element={<Oopt />}/>
          <Route path='/routeInfo' element={<RouteInfo />}/>
          <Route path='/ooptInfo' element={<OoptInfo />}/>
          <Route path='/about' element={<About />}/>
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
