const currentWeather = document.getElementById("current_weather");
const location = document.getElementById("location");
const date = document.getElementById("date");
const currentTemp = document.getElementById("current_temp");
const toggleMeasure = document.getElementById("toggle_measure");
const newLocation = document.getElementById("new_location");
const submit = document.getElementById("submit");

const feelsLikeTemp = document.getElementById("feels_like");
const humidity = document.getElementById("humidity");
const percipitation = document.getElementById("percipitation");
const wind = document.getElementById("wind");

let currentMeasurement = "f";
let data;

function setLocationCurrentWeather(data) {
  console.log(data);
  console.log(data.current.condition.text);
  currentWeather.innerText = data.current.condition.text;
  location.innerText = data.location.name + ", " + data.location.country;
  date.innerText = data.location.localtime;
  currentTemp.innerText = data.current.temp_f + " °F";
  feelsLikeTemp.innerText = data.current.feelslike_f + " °F";
  humidity.innerText = data.current.humidity + "%";
  percipitation.innerText = "remove";
  wind.innerText = data.current.wind_mph + "mph";
}

function changeMeasurement() {
  if (currentMeasurement === "f") {
    currentMeasurement = "c";
    currentTemp.innerText = data.current.temp_c + " °C";
    feelsLikeTemp.innerText = data.current.feelslike_c + " °C";
  } else if (currentMeasurement === "c") {
    currentMeasurement = "f";
    currentTemp.innerText = data.current.temp_f + " °F";
    feelsLikeTemp.innerText = data.current.feelslike_f + " °F";
  }
}

function setData(variable) {
  data = variable;
  console.log(data);
}

export default {
  setLocationCurrentWeather,
  changeMeasurement,
  setData,
};
