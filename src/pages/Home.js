import '../styles/style.css';

import Header from '../components/header/Header';
import MapBlock from '../components/map_block/MapBlock';
import OoptCard from '../components/oopt_card/OoptCard';
import RouteCard from '../components/route_card/RouteCard';
import AboutNsd from '../components/about_nsd/AboutNsd';

import phImp from "../png/ph_imp.png";
import ad from "../png/ad.png";
import old_road from "../png/old_road.png";
import krugo from "../png/krugo.png";
import last1 from "../png/last1.png";
import gos from "../png/gos.png";
import last2 from "../png/last2.png";
import last4 from "../png/last4.png";
import last5 from "../png/last5.png";
import last_vector from "../svg/last_vector.svg";

const Home = () => {
  return (
    <>
      <Header />
      <AboutNsd />
      <h2>Новые тропы</h2>
      <div className="route_cards">
        <RouteCard imgSrc={phImp} routeName="Тропой императоров" regionName="Р. Дагестан" distance="5 км" duration="2-3 ч"/>
        <RouteCard imgSrc={ad} routeName="Большой Тхач" regionName="Р. Адыгея" distance="55 км" duration="5-7 д"/>
        <RouteCard imgSrc={old_road} routeName="Старая дорога" regionName="Краснодарский край" distance="2.4 км" duration="2-3 ч"/>
        <RouteCard imgSrc={krugo} routeName="Кругозор Аишха" regionName="Краснодарский край" distance="5 км" duration="1 д"/>
      </div>
      <div className="more_routes">Больше троп {'>'}</div>

      <h2>Карта маршрутов</h2>
      <MapBlock />

      <h2>Заповедники и национальные парки</h2>
      <div className="oopt_cards">
        <OoptCard imgSrc={last1} ooptName='ФГБУ Сочинский национальный парк' regionName="Краснодарский край" routesNumber="2 маршрута"/>
        <OoptCard imgSrc={gos} ooptName='Государственный природный заповедник "Утриш"' regionName="Краснодарский край" routesNumber="1 маршрут"/>
        <OoptCard imgSrc={last2} ooptName='Национальный парк "Большой Тхач"' regionName="Р. Адыгея" routesNumber="1 маршрут"/>
        <OoptCard imgSrc={last4} ooptName="ФГБУ “Тебердинский национальный парк”" regionName="Карачаево-Черкесская Р." routesNumber="12 маршрутов"/>
        <OoptCard imgSrc={last5} ooptName="Куратинское ущелье" regionName="Р. Северная Осетия - Алания" routesNumber="6 маршрутов"/>
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