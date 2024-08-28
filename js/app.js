window.addEventListener("scroll", (e) => {
  document.body.style.cssText = `--scrollTop: ${this.scrollY}px`;
});

// import { json_r2_2 } from "../qgis2web_2024_08_23-20_32_06_721478/layers/r2_2";

function handleClick() {
  console.log("Кнопка была нажата!");
}

var myButton = document.getElementById("r1");

// Назначение обработчика события click
myButton.addEventListener("click", handleClick);
