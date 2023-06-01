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
  let forecastContainer = document.getElementById("forecast_container");
  let cardContainer = document.getElementById("daily_cards");
  cardContainer.remove();
  cardContainer = document.createElement("div");
  cardContainer.setAttribute("id", "daily_cards");
  forecastContainer.appendChild(cardContainer);
  for (let i = 0; i < 7; i++) {
    let card = document.createElement("div");
    let day = document.createElement("h2");
    let date = document.createElement("h3");
    let avgTemp = document.createElement("h2");
    let avgWind = document.createElement("h3");
    let dayOfWeek = convertDayOfWeek(data, [i]);

    card.setAttribute("id", "day" + [i] + "_card");
    card.classList.add("card");
    day.classList.add("day");
    day.innerText = dayOfWeek;
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

function convertDayOfWeek(data, i) {
  let date = new Date(data.forecast.forecastday[i].date);
  let dayNumber = date.getDay();

  if (dayNumber === 0) {
    return "Sunday";
  } else if (dayNumber === 1) {
    return "Monday";
  } else if (dayNumber === 2) {
    return "Tuesday";
  } else if (dayNumber === 3) {
    return "Wednesday";
  } else if (dayNumber === 4) {
    return "Thursday";
  } else if (dayNumber === 5) {
    return "Friday";
  } else if (dayNumber === 6) {
    return "Saturday";
  }
}

function changeMeasurement() {
  if (currentMeasurement === "f") {
    currentMeasurement = "c";
    currentTemp.innerText = data.current.temp_c + " °C";
    feelsLikeTemp.innerText = data.current.feelslike_c + " °C";
    toggleMeasure.innerText = "Display °F";
  } else if (currentMeasurement === "c") {
    currentMeasurement = "f";
    currentTemp.innerText = data.current.temp_f + " °F";
    feelsLikeTemp.innerText = data.current.feelslike_f + " °F";
    toggleMeasure.innerText = "Display °C";
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
