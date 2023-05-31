import "./styles/style.css";
import dataFunctions from "./dataHandler.js";
import displayFunctions from "./displayHandler.js";
let data;

async function useData() {
  data = await dataFunctions.getWeatherData();
  console.log(data);
  displayFunctions.setLocationCurrentWeather(data);
  changeMeasurementEventListener(data);
}

function changeMeasurementEventListener(data) {
  const toggleMeasure = document.getElementById("toggle_measure");
  toggleMeasure.addEventListener("click", () => {
    displayFunctions.setData(data);
    displayFunctions.changeMeasurement();
  });
}

useData();
console.log(data);
