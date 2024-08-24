import "./styles/style.css";

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
// import Map from './pages/Map';
// import Oopt from './pages/Oopt';
// import RouteInfo from './pages/RouteInfo';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      {/* <Map /> */}
      {/* <Oopt /> */}
      {/* <RouteInfo /> */}
      <Footer />
    </div>
  );
}

export default App;
