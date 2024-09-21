import { useNavigate } from "react-router-dom";
import "./style.css";

function BackButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(-1); // Переходит на предыдущую страницу
  };

  return <p onClick={handleClick}>{"<"} Назад</p>;
}

const BackBtn = () => {
  return <div className="BackBtn">{BackButton()}</div>;
};

export default BackBtn;
