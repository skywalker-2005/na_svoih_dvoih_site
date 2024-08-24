import OoptSearchBar from '../components/oopt_search_bar/OoptSearchBar';
import OoptCard from '../components/oopt_card/OoptCard';
import '../styles/style.css';

import last1 from '../png/last1.png';
import gos from '../png/gos.png';
import last2 from '../png/last2.png';
import last4 from '../png/last4.png';
import last5 from '../png/last5.png';

const Oopt = () => {
  return (
    <>
      <OoptSearchBar />
      <div className="oopt_cards" style={{ paddingTop: "2.5vw" }}>
        <OoptCard imgSrc={last1} ooptName='ФГБУ Сочинский национальный парк' regionName="Краснодарский край" routesNumber="2 маршрута"/>
        <OoptCard imgSrc={gos} ooptName='Государственный природный заповедник "Утриш"' regionName="Краснодарский край" routesNumber="1 маршрут"/>
        <OoptCard imgSrc={last2} ooptName='Национальный парк "Большой Тхач"' regionName="Р. Адыгея" routesNumber="1 маршрут"/>
        <OoptCard imgSrc={last4} ooptName="ФГБУ “Тебердинский национальный парк”" regionName="Карачаево-Черкесская Р." routesNumber="12 маршрутов"/>
        <OoptCard imgSrc={last5} ooptName="Куратинское ущелье" regionName="Р. Северная Осетия - Алания" routesNumber="6 маршрутов"/>
      </div>
    </>
  );
}

export default Oopt;
