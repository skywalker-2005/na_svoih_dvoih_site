import "./style.css";
import vk from "../../svg/vk.svg";
import tg from "../../svg/tg.svg";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="footer_item">
        <p className="foot_t">Контакты</p>
        <p className="foot_t2">
          nasvdv@yandex.ru<br />
          8 (977) 718-08-15
        </p>
      </div>
      <div className="footer_item">
        <p className="foot_t">Полезные ссылки</p>
        <p className="foot_t2">
          <a href='/about'>О проекте</a>
        </p>
      </div>
      <div className="footer_item">
        <p className="foot_t">Социальные сети</p>
        <div className="social">
          <a href='https://vk.com/na.svoih.dvoih' target="_blank" rel="noreferrer"><img src={vk} alt='' className='soc'></img></a>
          <a href='https://t.me/na_svoih_dvoih' target="_blank" rel="noreferrer"><img src={tg} alt='' className='soc'></img></a>
        </div>
      </div>
    </div>
  );
}
 
export default Footer;