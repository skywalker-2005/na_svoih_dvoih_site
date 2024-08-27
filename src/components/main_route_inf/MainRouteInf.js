import './style.css';

const MainRouteInf = (props) => {
  return (
    <div className='MainRouteInf' style={{ marginBottom: "2vw"}}>
      {props.important && (
        <div>
          <h3>Важно</h3>
          <p>{props.important}</p>
        </div>
      )}
      {props.line && (
        <div>
          <h3>Нитка маршрута</h3>
          <p>{props.line}</p>
        </div>
      )}
      {props.scheme && (
        <div>
          <h3>Схема переходов</h3>
          <p>{props.scheme}</p>
        </div>
      )}
      {props.way && (
        <div>
          <h3>Способ подъезда к месту начала маршрута</h3>
          <p>{props.way}</p>
        </div>
      )}
      {props.important && (
        <div>
          <h3>Места стоянок (ночевок)</h3>
          <p>{props.night}</p>
        </div>
      )}
    </div>
  );
}
 
export default MainRouteInf;