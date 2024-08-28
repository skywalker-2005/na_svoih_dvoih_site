import './style.css';

const Btn = ({text, link}) => {
  return (
    <a href={link} className='Btn'>{text}</a>
  );
}
 
export default Btn;