import '../styles/style.css';
import screenshot from "../png/Screenshot 2024-05-07 at 16.32 1.png";

import oopt from '../data/ooptList.js';
import { useParams } from 'react-router-dom';

import HeaderImg from '../components/header_img/HeaderImg';
import BriefInf from '../components/brief_inf/BriefInf';
import Contacts from '../components/contacts/Contacts';
import MainRouteInf from '../components/main_route_inf/MainRouteInf';
import MainRoutePoints from '../components/main_route_points/MainRoutePoints';
import Gallery from '../components/gallery/Gallery.js';
import Rules from '../components/rules/Rules.js';

const RouteInfo = () => {
  const { type, id } = useParams(); // считать id тропы
  const reserve = oopt[type-1];
  const route = reserve.routes[id-1];
  console.log(reserve);
  return (
    <>
      <HeaderImg title={route.title} type={route.type} distance={route.distance} duration={route.duration} wayType={route.wayType} img={route.images[route.images.length - 1]}/>

      <Gallery images={route.images}/>
      
      <BriefInf level={route.level} region={route.region} oopt={reserve.title} />
      
      <div className="rtinfo_flex">
        <MainRouteInf
        important={route.important}
        line={route.line}
        scheme={route.scheme}
        way={route.way}
        night={route.night}
        />
        
        <MainRoutePoints 
        safety={route.safety}
        shedule={route.shedule}
        comfort={route.comfort}
        size={route.size}
        />

        <h3>Описание маршрута</h3>
        <p>{route.description}</p>

        <h3>Маршрут на карте</h3>
        <div><img src={screenshot} alt="" style={{ width: "85vw", height: "50vh" }}/></div>
        <div style={{ height: "2vw" }}></div>
        
        <Rules rules={reserve.rules} />

        <Contacts
        adress={reserve.adress}
        phone={reserve.phone}
        email={reserve.email}
        site={reserve.site}
        />
      </div>
    </>
  );
}
 
export default RouteInfo;