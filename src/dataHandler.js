let weatherData;

async function getWeatherData(location) {
  const data = await fetch(
    "http://api.weatherapi.com/v1/forecast.json?key=8725fafca682482d964100105233005&q=turkey&days=7&aqi=no&alerts=no"
  );
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

function getData() {
  console.log(weatherData);
}

export default {
  getWeatherData,
  getLocation,
  setLocation,
  getData,
};
