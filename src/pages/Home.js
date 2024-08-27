import '../styles/style.css';

import routes from '../data/routesList';
import oopt from '../data/ooptList';

import Header from '../components/header/Header';
import OoptCard from '../components/oopt_card/OoptCard';
import MapBlock from '../components/map_block/MapBlock';
import RouteCard from '../components/route_card/RouteCard';
import AboutNsd from '../components/about_nsd/AboutNsd';

import last_vector from "../svg/last_vector.svg";

const Home = () => {
  return (
    <>
      <Header />
      <AboutNsd />
      <h2>Новые тропы</h2>
      <div className="route_cards">
        {routes.map((route) => {
          return <RouteCard key={route.key} title={route.title} region={route.region} distance={route.distance} duration={route.duration} img={route.img} />;
        })}
      </div>
      <div className="more_routes">Больше троп {'>'}</div>

      <h2>Карта маршрутов</h2>
      <MapBlock />

      <h2>Заповедники и национальные парки</h2>
      <div className="oopt_cards">
        {oopt.map((oopt) => {
          return <OoptCard key={oopt.key} title={oopt.title} region={oopt.region} routesNum={oopt.routesNum} img={oopt.img} />;
        })}
        <div className="last">
          <img src={last_vector} alt="" width="108%" />
          <div className="first_title" style={{ left: "2%", top: "18%" }}>
            Больше объектов ООПТ
          </div>
          <div
            className="know_more"
            style={{ 
              bottom: "15%",
              right: "-6%",
              backgroundColor: "#dfdfdf",
              color: "#1e444b",
              width: "10vw",
              left: "2%",
            }}>
            Посмотреть все {'>'}
          </div>
        </div>
      </div>
    </>
  );
}
 
export default Home;