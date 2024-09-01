import '../styles/style.css';
import gallery from "../png/gallery.png";
import screenshot from "../png/Screenshot 2024-05-07 at 16.32 1.png";
import { useParams } from 'react-router-dom';

import oopt from '../data/ooptList.js';

import HeaderImg from '../components/header_img/HeaderImg';
import Contacts from '../components/contacts/Contacts';

window.scrollTo(0, 0);

const OoptInfo = () => {
  const { type } = useParams();
  console.log(type);
  const reserve = oopt[type-1];
  return (
    <>
      <HeaderImg title={reserve.title} type={reserve.type} ooptType={reserve.ooptType} routesNum={reserve.routesNum} region={reserve.region} img={reserve.imgFull}/>
      
      <div><img src={gallery} alt="" style={{ width: "100vw" }}/></div>
      <div style={{ height: "1vw" }}></div>
      
      
      <div className="rtinfo_flex">
        <p>{reserve.shortDescription}</p>
        {/* маршруты */}

        <h3>Основные моменты</h3>
        <p>{reserve.mainMoments}</p>

        <h3>Как добраться</h3>
        <p>{reserve.wayTo}</p>

        <h3>Карта территории</h3>
        <div><img src={screenshot} alt="" style={{ width: "85vw", height: "50vh" }}/></div>
        <div style={{ height: "2vw" }}></div>
        
        <div className="oopt_rules">Правила нахождения на территории</div>

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
 
export default OoptInfo;