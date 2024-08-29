import '../styles/style.css';
import gallery from "../png/gallery.png";
import screenshot from "../png/Screenshot 2024-05-07 at 16.32 1.png";

import kaukazus_reserve from '../data/oopt/kaukazus_reserve/kaukazusReserve.js';

import HeaderImg from '../components/header_img/HeaderImg';
import Contacts from '../components/contacts/Contacts';

const OoptInfo = () => {
  return (
    <>
      <HeaderImg title={kaukazus_reserve.title} type={kaukazus_reserve.type} ooptType={kaukazus_reserve.ooptType} routesNum={kaukazus_reserve.routesNum} region={kaukazus_reserve.region} img={kaukazus_reserve.img}/>
      
      <div><img src={gallery} alt="" style={{ width: "100vw" }}/></div>
      <div style={{ height: "1vw" }}></div>
      
      
      <div className="rtinfo_flex">
        <p>{kaukazus_reserve.shortDescription}</p>
        {/* маршруты */}

        <h3>Основные моменты</h3>
        <p>{kaukazus_reserve.mainMoments}</p>

        <h3>Как добраться</h3>
        <p>{kaukazus_reserve.wayTo}</p>

        <h3>Карта территории</h3>
        <div><img src={screenshot} alt="" style={{ width: "85vw", height: "50vh" }}/></div>
        <div style={{ height: "2vw" }}></div>
        
        <div className="oopt_rules">Правила нахождения на территории</div>

        <Contacts
        adress={kaukazus_reserve.adress}
        phone={kaukazus_reserve.phone}
        email={kaukazus_reserve.email}
        site={kaukazus_reserve.site}
        />
      </div>
    </>
  );
}
 
export default OoptInfo;