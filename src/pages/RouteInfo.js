import '../styles/style.css';
import gallery from "../png/gallery.png";
import screenshot from "../png/Screenshot 2024-05-07 at 16.32 1.png";

import route30V from '../data/oopt/kaukazus_reserve/route30V.js';

import HeaderImg from '../components/header_img/HeaderImg';
import BriefInf from '../components/brief_inf/BriefInf';
import Contacts from '../components/contacts/Contacts';
import MainRouteInf from '../components/main_route_inf/MainRouteInf';
import MainRoutePoints from '../components/main_route_points/MainRoutePoints';

const RouteInfo = () => {
  return (
    <>
      <HeaderImg title={route30V.title} type={route30V.type} distance={route30V.distance} duration={route30V.duration} wayType={route30V.wayType} img={route30V.img}/>
      
      <div><img src={gallery} alt="" style={{ width: "100vw" }}/></div>
      <div style={{ height: "1vw" }}></div>
      
      <BriefInf level={route30V.level} region={route30V.region} oopt={route30V.oopt} />
      
      <div className="rtinfo_flex">
        <MainRouteInf
        important={route30V.important}
        line={route30V.line}
        scheme={route30V.scheme}
        way={route30V.way}
        night={route30V.night}
        />
        
        <MainRoutePoints 
        safety={route30V.safety}
        shedule={route30V.shedule}
        comfort={route30V.comfort}
        size={route30V.size}
        />

        <h3>Описание маршрута</h3>
        <p>{route30V.description}</p>

        <h3>Маршрут на карте</h3>
        <div><img src={screenshot} alt="" style={{ width: "85vw", height: "50vh" }}/></div>
        <div style={{ height: "2vw" }}></div>
        
        <div className="oopt_rules">Правила нахождения на территории</div>

        <Contacts
        adress={route30V.adress}
        phone={route30V.phone}
        email={route30V.email}
        site={route30V.site}
        />
      </div>
    </>
  );
}
 
export default RouteInfo;