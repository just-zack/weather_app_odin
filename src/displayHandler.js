const currentWeather = document.getElementById("current_weather");
const location = document.getElementById("location");
const date = document.getElementById("date");
const currentTemp = document.getElementById("current_temp");
const toggleMeasure = document.getElementById("toggle_measure");
const newLocation = document.getElementById("new_location");
const submit = document.getElementById("submit");

const feelsLikeTemp = document.getElementById("feels_like");
const humidity = document.getElementById("humidity");
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
  wind.innerText = data.current.wind_mph + "mph";
}

function setLocationForecast(data) {
  let cardContainer = document.getElementById("daily_cards");
  for (let i = 0; i < 7; i++) {
    let card = document.createElement("div");
    let day = document.createElement("h2");
    let date = document.createElement("h3");
    let avgTemp = document.createElement("h2");
    let avgWind = document.createElement("h3");

    card.setAttribute("id", "day" + [i] + "_card");
    card.classList.add("card");
    day.classList.add("day");
    day.innerText = "Get Date";
    date.classList.add("date");
    date.innerText = data.forecast.forecastday[i].date;
    avgTemp.classList.add("avg_temp");
    avgTemp.innerText = data.forecast.forecastday[i].day.avgtemp_f + " °F";
    avgWind.classList.add("avg_wind");
    avgWind.innerText = data.forecast.forecastday[i].day.maxwind_mph + " mph";
    cardContainer.appendChild(card);
    card.appendChild(day);
    card.appendChild(date);
    card.appendChild(avgTemp);
    card.appendChild(avgWind);
  }
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

function changeLocation() {}

function setData(variable) {
  data = variable;
  console.log(data);
}

export default {
  setLocationCurrentWeather,
  changeMeasurement,
  setData,
  setLocationForecast,
};
