import './style.css';
import oopt_top from "../../svg/oopt_top.svg";

const OoptSearchBar = () => {
  return (
    <div className="OoptSearchBar">
      <img src={oopt_top} alt="" style={{ width: "100vw" }} />
      <div className="oopt_wrap">
        <div className="oopt_flex">
          <div style={{ width: "100%" }}>Заповедники и национальные парки</div>
          <div style={{ width: "100%", height: "2.5vw" }}></div>
          <div className="cyfr" style={{ fontSize: "1.3vw" }}>Название территории</div>
          <div className="cyfr" style={{ fontSize: "1.3vw" }}>Тип ООПТ</div>
          <div className="cyfr" style={{ fontSize: "1.3vw", width: "50vw" }}>Регион</div>
          <div style={{ width: "100%", height: "0.5vw" }}></div>
          <div className="oopt_info"></div>
          <div className="oopt_info"></div>
          <div className="oopt_info"></div>
          <div
            className="oopt_info"
            style={{ flexBasis: "6vw", backgroundColor: "#f0a54e" }}
          >
            Найти
          </div>
          <div
            className="oopt_info"
            style={{ 
              flexBasis: "10vw",
              border: "antiquewhite 3px solid",
              backgroundColor: "rgba(139, 69, 19, 0)",
              marginRight: "6vw"
            }}
          >
            Сбросить
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default OoptSearchBar;