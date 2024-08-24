import "./style.css";
import icons from "../../svg/icons.svg";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer_item">
        <div className="foot_t">Контакты</div>
        <div className="foot_t2">
          nasvdv@yandex.ru<br />
          8 (977) 718-08-15
        </div>
      </div>
      <div className="footer_item">
        <div className="foot_t">Полезные ссылки</div>
        <div className="foot_t2">
          О проекте<br />
          Стать партнёром
        </div>
      </div>
      <div className="footer_item">
        <div className="foot_t">Социальные сети</div>
        <div className="foot_t2">
          <img src={icons} alt="" className="soc" />
        </div>
      </div>
    </div>
  );
}
 
export default Footer;