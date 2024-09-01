import './style.css';

const Btn = ({text, link, id}) => {
  return (
    // <p onClick={() => history.push('/ooptInfo' + '/' + id)}>{text}</p>
    <a href={`/${link}${id}`} className='Btn' id={id}>{text}</a>
  );
}
 
export default Btn;