import './style.css';
import { NavLink } from 'react-router-dom';

const Btn = ({text, link}) => {
  return (
    <NavLink to={link} className='Btn'>{text}</NavLink>
  );
}
 
export default Btn;