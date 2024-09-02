import '../styles/style.css';
import screenshot from "../png/Screenshot 2024-05-07 at 16.32 1.png";
import { useParams } from 'react-router-dom';

import oopt from '../data/ooptList.js';

import HeaderImg from '../components/header_img/HeaderImg';
import Contacts from '../components/contacts/Contacts';
import Rules from '../components/rules/Rules.js';
import Gallery from '../components/gallery/Gallery.js';

const OoptInfo = () => {
  const { type } = useParams();
  const reserve = oopt[type-1];
  return (
    <>
      <HeaderImg title={reserve.title} type={reserve.type} ooptType={reserve.ooptType} routesNum={reserve.routesNum} region={reserve.region} img={reserve.imgFull}/>
      
      <Gallery images={reserve.images}/>
      
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
 
export default OoptInfo;