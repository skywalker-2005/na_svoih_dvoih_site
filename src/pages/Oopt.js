import OoptCard from "../components/oopt_card/OoptCard";
import "../styles/style.css";
import { useState } from "react";
import Select from "react-select";

import oopt from "../data/ooptList";
import oopt_top from "../svg/oopt_top.svg";

const Oopt = () => {
  const [territoryName, setTerritoryName] = useState("");
  const [ooptType, setOoptType] = useState("");
  const [region, setRegion] = useState("");

  const filteredOopt = oopt.filter((oopt) => {
    let filter1 =
      oopt.title.toLowerCase().includes(territoryName.toLowerCase()) ||
      !territoryName;
    let filter2 =
      oopt.ooptType.toLowerCase().includes(ooptType.toLowerCase()) || !ooptType;
    let filter3 =
      oopt.region.toLowerCase().includes(region.toLowerCase()) || !region;
    return filter1 && filter2 && filter3;
  });

  let options_title = oopt.map((oopt) => {
    return { value: oopt.title, label: oopt.title };
  });

  let options_ooptType = ["Заповедник", "Национальный парк"].map((item) => {
    return { value: item, label: item };
  });
  let options_region = [
    "Краснодарский к.",
    "р. Дагестан",
    "р. Ингушетия",
    "Кабардино-Балкарская р.",
    "Карачаево-Черкесская р.",
    "р. Северная Осетия - Алания",
    "Ставропольский к.",
    "Чеченская р.",
  ].map((item) => {
    return { value: item, label: item };
  });

  options_title = [{ value: "", label: "Все" }].concat(options_title);
  options_ooptType = [{ value: "", label: "Все" }].concat(options_ooptType);
  options_region = [{ value: "", label: "Все" }].concat(options_region);

  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? "black" : "rgba(0, 0, 0, 0.87)",
    }),
  };

  return (
    <>
      <div
        className="OoptSearchBar"
        style={{
          backgroundImage: `url(${oopt_top})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="oopt_wrap">
          <div className="oopt_flex">
            <h1>Найти маршрут</h1>
            <div className="input-group">
              <Select
                className="selectItem"
                options={options_title}
                onChange={(selectedOption) => {
                  if (selectedOption.value === "") setTerritoryName("");
                  else setTerritoryName(selectedOption.value);
                }}
                placeholder="Название территории"
                styles={customStyles}
              />
              <Select
                className="selectItem"
                options={options_ooptType}
                onChange={(selectedOption) => {
                  if (selectedOption.value === "") setOoptType("");
                  else setOoptType(selectedOption.value);
                }}
                placeholder="Выберите тип ООПТ"
                styles={customStyles}
              />
              <Select
                className="selectItem"
                options={options_region}
                onChange={(selectedOption) => {
                  if (selectedOption.value === "") setRegion("");
                  else setRegion(selectedOption.value);
                }}
                placeholder="Выберите регион"
                styles={customStyles}
              />
              <button
                className="oopt_info"
                style={{
                  border: "#fff 2px solid",
                  backgroundColor: "rgba(139, 69, 19, 0)",
                }}
                onClick={() => {
                  setTerritoryName("");
                  setOoptType("");
                  setRegion("");
                }}
              >
                Сбросить
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="main">
        <div className="oopt_cards">
          {/* <div className="oopt_cards" style={{ paddingTop: "2.5vw", margin: "0 5vw", marginBottom: "2vw"}}> */}
          {filteredOopt.map((oopt) => {
            return (
              <OoptCard
                key={oopt.key}
                title={oopt.title}
                region={oopt.region}
                routesNum={oopt.routesNum}
                img={oopt.images[oopt.images.length - 1]}
                link={`/ooptInfo/${oopt.id}`}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Oopt;
