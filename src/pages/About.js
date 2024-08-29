import '../styles/style.css';
import vk_about from "../svg/vk_about.svg";
import tg_about from "../svg/tg_about.svg";

const About = () => {
  return (
    <div className='about_us_block'>
      <h3>О нас</h3>
      <p>Мы - команда “На Своих Двоих” и ваши проводники в мир активного туризма!<br/><br/>
      Наша миссия - рассказать об активном туризме в России, сформировав единую систему туристических маршрутов, находящихся на особо охраняемых природных территориях (ООПТ).<br/><br/>
      Данная платформа соберет в себе основную информацию о национальных парках, заповедниках и тропах Северного Кавказа, что поможет туристам при самостоятельном планировании путешествия.</p>
      <h3>Медиа</h3>
      <p>Помимо развития платформы наша команда создает для вас интересный и увлекательный контент в социальных сетях:</p>
      <div className="social">
        <a className='soc' href='https://vk.com/na.svoih.dvoih' target="_blank" rel="noreferrer">
          <img src={vk_about} alt=''></img>
          <p>Сообщество “На Своих Двоих”</p>
        </a>
        <a className='soc' href='https://t.me/na_svoih_dvoih' target="_blank" rel="noreferrer">
          <img src={tg_about} alt=''></img>
          <p>Канал “На Своих Двоих”</p>
        </a>
      </div>
      <h3>Контакты</h3>
      <p>nasvdv@yandex.ru<br/>
      8 (977) 718-08-15<br/><br/>
      Всегда будем рады вашим вопросам и предложениям!</p>
      <p style={{ opacity: "0.5" }}>Данный проект реализуется в рамках Всероссийского студенческого конкурса “Твой Ход”</p>
    </div>
  );
}
 
export default About;