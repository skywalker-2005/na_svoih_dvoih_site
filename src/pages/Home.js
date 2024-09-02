import '../styles/style.css';

import MainHeader from '../components/main_header/MainHeader';
import OoptCard from '../components/oopt_card/OoptCard';
import MapBlock from '../components/map_block/MapBlock';
import RouteCard from '../components/route_card/RouteCard';
import AboutNsd from '../components/about_nsd/AboutNsd';
import Btn from '../components/btn/Btn';

import last_vector from "../svg/last_vector.svg";
import oopt from '../data/ooptList.js';

const Home = () => {
  const reserve = oopt[0];
  return (
    <>
      <MainHeader />
      <AboutNsd />
      <div className='main'>
        <h2>Новые тропы</h2>
        <div className="route_cards">
          {reserve.routes.map((route) => {
            return <RouteCard key={route.key} title={route.title} region={route.region} distance={route.distance} duration={route.duration} img={route.images[route.images.length-1]} link={`/routeInfo/${route.id}`}/>;
          })}
        </div>
        <Btn text='Больше троп >' link='/oopt'/>

        <h2>Карта маршрутов</h2>
        <MapBlock />

        <h2>Заповедники и национальные парки</h2>
        <div className="oopt_cards">
          {oopt.map((oopt) => {
            return <OoptCard key={oopt.key} title={oopt.title} region={oopt.region} routesNum={oopt.routesNum} img={oopt.images[oopt.images.length-1]} link={`/ooptInfo/${oopt.id}`}/>;
          })}
          <div className="last">
            <img src={last_vector} alt="" width="100%" />
            <div className="first_title" style={{ left: "2%", top: "18%" }}>
              Больше объектов ООПТ
            </div>
            <Btn text='Посмотреть все >' link='/oopt' />
          </div>
        </div>
      </div>
    </>
  );
}
 
export default Home;