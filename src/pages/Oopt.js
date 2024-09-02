import OoptSearchBar from '../components/oopt_search_bar/OoptSearchBar';
import OoptCard from '../components/oopt_card/OoptCard';
import '../styles/style.css';

import oopt from '../data/ooptList';

const Oopt = () => {
  return (
    <>
      <OoptSearchBar />
      <div className="oopt_cards" style={{ paddingTop: "2.5vw", margin: "0 5vw", marginBottom: "2vw"}}>
        {oopt.map((oopt) => {
          return <OoptCard key={oopt.key} title={oopt.title} region={oopt.region} routesNum={oopt.routesNum} img={oopt.images[oopt.images.length-1]} link={`/ooptInfo/${oopt.id}`}/>;
        })}
      </div>
    </>
  );
}

export default Oopt;
