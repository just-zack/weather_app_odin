let location;
let defaultLocation;

async function getWeatherData(location) {
  const data = await fetch(
    "http://api.weatherapi.com/v1/forecast.json?key=8725fafca682482d964100105233005&q=Honolulu&days=7&aqi=no&alerts=no"
  );
  const result = await data.json();
  console.log(result);
  //return result
}

function getLocation() {
  return location;
}

function setLocation(variable) {
  location = variable;
}

export default {
  getWeatherData,
  getLocation,
  setLocation,
};
