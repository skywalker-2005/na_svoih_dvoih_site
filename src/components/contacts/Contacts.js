import './style.css';

const Contacts = (props) => {
  return (
    <div className="Contacts">
      <h3>Контакты заповедника</h3>
      Адрес: {props.adress} <br />
      Тел./факс: {props.phone} <br />
      E-mail: {props.email} <br />
      Официальный сайт: {props.site} <br /><br />
      <span style={{ opacity: "0.5" }}>Информация взята с официального сайта заповедника</span>
    </div>
  );
}
 
export default Contacts;