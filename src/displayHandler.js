const body = document.getElementById("body");
const mainContainer = document.getElementById("main_container");
const currentWeather = document.getElementById("current_weather");
const location = document.getElementById("location");
const date = document.getElementById("date");
const time = document.getElementById("time");
const currentTemp = document.getElementById("current_temp");
const toggleMeasure = document.getElementById("toggle_measure");

const feelsLikeTemp = document.getElementById("feels_like");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

let currentMeasurement = "f";
let data;

function setLocationCurrentWeather(data) {
  currentWeather.innerText = data.current.condition.text;
  location.innerText = data.location.name + ", " + data.location.country;
  date.innerText = getNewDateString(data);
  time.innerText = getNewTimeString(data);
  currentTemp.innerText = data.current.temp_f + " °F";
  feelsLikeTemp.innerText = data.current.feelslike_f + " °F";
  humidity.innerText = data.current.humidity + "%";
  wind.innerText = data.current.wind_mph + " mph";
}

function getNewDateString(data) {
  let currentTime = data.location.localtime;
  let newDate = new Date(currentTime);
  let newDateString = newDate.toDateString();

  return newDateString;
}

function getNewTimeString(data) {
  let currentTime = data.location.localtime;
  let newDate = new Date(currentTime);
  let newTimeString = newDate.toTimeString();

  return newTimeString;
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
    let condition = document.createElement("h1");
    let date = document.createElement("h3");
    let avgTemp = document.createElement("h2");
    let avgWind = document.createElement("h3");
    let dayOfWeek = convertDayOfWeek(data, [i]);

    card.setAttribute("id", "day" + [i] + "_card");
    card.classList.add("card");
    day.classList.add("day");
    day.innerText = dayOfWeek;
    condition.classList.add("condition");
    condition.innerText = data.forecast.forecastday[i].day.condition.text;
    date.classList.add("date");
    date.innerText = data.forecast.forecastday[i].date;
    avgTemp.classList.add("avg_temp");
    avgTemp.setAttribute("id", "avgTemp_" + [i]);
    avgTemp.innerText = data.forecast.forecastday[i].day.avgtemp_f + " °F";
    avgWind.classList.add("avg_wind");
    avgWind.innerText = data.forecast.forecastday[i].day.maxwind_mph + " mph";
    cardContainer.appendChild(card);
    card.appendChild(day);
    card.appendChild(condition);
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
    changeForecastMeasurement("f");
  } else if (currentMeasurement === "c") {
    currentMeasurement = "f";
    currentTemp.innerText = data.current.temp_f + " °F";
    feelsLikeTemp.innerText = data.current.feelslike_f + " °F";
    toggleMeasure.innerText = "Display °C";
    changeForecastMeasurement("c");
  }
}

function changeForecastMeasurement(variable) {
  for (let i = 0; i < 7; i++) {
    let avgTemp = document.getElementById("avgTemp_" + [i]);
    if (variable === "f") {
      avgTemp.innerText = data.forecast.forecastday[i].day.avgtemp_c + " °C";
    } else if (variable === "c") {
      avgTemp.innerText = data.forecast.forecastday[i].day.avgtemp_f + " °F";
    }
  }
}

function setData(variable) {
  data = variable;
  console.log(data);
}

function getCurrentHour(data) {
  let dataDate = data.location.localtime;
  let date = new Date(dataDate);
  let currentHour = date.getHours();
  return currentHour;
}

function changeColors(data) {
  let currentHour = getCurrentHour(data);
  if (currentHour > 6 && currentHour <= 11) {
    body.style.backgroundImage = "linear-gradient(#e9c46a, #264653)";
    mainContainer.style.color = "#264653";
  } else if (currentHour > 11 && currentHour <= 17) {
    body.style.backgroundImage = "linear-gradient(#e9c46a, #e76f51)";
    mainContainer.style.color = "#264653";
  } else if (currentHour > 17 && currentHour <= 20) {
    body.style.backgroundImage = "linear-gradient(#2a9d8f, #264653)";
    mainContainer.style.color = "#fefae0";
  } else {
    body.style.backgroundImage = "";
    body.style.backgroundColor = "black";
    mainContainer.style.color = "#fefae0";
  }
}

export default {
  changeColors,
  setLocationCurrentWeather,
  changeMeasurement,
  setData,
  setLocationForecast,
};
