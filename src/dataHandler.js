let weatherData;
let location = "los angeles";

async function getWeatherData() {
  let fetchURL =
    "http://api.weatherapi.com/v1/forecast.json?key=8725fafca682482d964100105233005&q=" +
    location +
    "&days=7&aqi=no&alerts=no";
  const data = await fetch(fetchURL, {
    mode: "cors",
  });
  const result = await data.json();
  weatherData = result;
  return weatherData;
}

function getLocation() {
  return location;
}

function setLocation(variable) {
  location = variable;
}

function getNewLocationData(variable) {
  setLocation(variable);
  getWeatherData(variable);
}

export default {
  getWeatherData,
  getLocation,
  setLocation,
  getNewLocationData,
};
