import "./styles/style.css";
import dataFunctions from "./dataHandler.js";
import displayFunctions from "./displayHandler.js";
let data;

async function useData() {
  data = await dataFunctions.getWeatherData();
  displayFunctions.changeColors(data);
  displayFunctions.setLocationCurrentWeather(data);
  displayFunctions.setLocationForecast(data);
}

function changeMeasurementEventListener() {
  const toggleMeasure = document.getElementById("toggle_measure");
  toggleMeasure.addEventListener("click", () => {
    displayFunctions.setData(data);
    displayFunctions.changeMeasurement();
  });
}

function changeLocationAddEventListener() {
  const newLocation = document.getElementById("new_location");
  const submit = document.getElementById("submit");

  submit.addEventListener("click", () => {
    event.preventDefault();
    dataFunctions.setLocation(newLocation.value);
    useData();
    newLocation.value = "";
  });
}

useData();
changeLocationAddEventListener();
changeMeasurementEventListener();
