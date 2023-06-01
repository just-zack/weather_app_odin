/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*******************************!*\
  !*** ./src/displayHandler.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const body = document.getElementById("body");
const mainContainer = document.getElementById("main_container");
const currentWeather = document.getElementById("current_weather");
const location = document.getElementById("location");
const date = document.getElementById("date");
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  changeColors,
  setLocationCurrentWeather,
  changeMeasurement,
  setData,
  setLocationForecast,
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzcGxheS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixPQUFPO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLE9BQU87QUFDekI7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW5fdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluX3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW5fdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW5fdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW5fdG9kby8uL3NyYy9kaXNwbGF5SGFuZGxlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvZHlcIik7XG5jb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluX2NvbnRhaW5lclwiKTtcbmNvbnN0IGN1cnJlbnRXZWF0aGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjdXJyZW50X3dlYXRoZXJcIik7XG5jb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9jYXRpb25cIik7XG5jb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlXCIpO1xuY29uc3QgY3VycmVudFRlbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImN1cnJlbnRfdGVtcFwiKTtcbmNvbnN0IHRvZ2dsZU1lYXN1cmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZ2dsZV9tZWFzdXJlXCIpO1xuXG5jb25zdCBmZWVsc0xpa2VUZW1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmZWVsc19saWtlXCIpO1xuY29uc3QgaHVtaWRpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImh1bWlkaXR5XCIpO1xuY29uc3Qgd2luZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2luZFwiKTtcblxubGV0IGN1cnJlbnRNZWFzdXJlbWVudCA9IFwiZlwiO1xubGV0IGRhdGE7XG5cbmZ1bmN0aW9uIHNldExvY2F0aW9uQ3VycmVudFdlYXRoZXIoZGF0YSkge1xuICBjdXJyZW50V2VhdGhlci5pbm5lclRleHQgPSBkYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQ7XG4gIGxvY2F0aW9uLmlubmVyVGV4dCA9IGRhdGEubG9jYXRpb24ubmFtZSArIFwiLCBcIiArIGRhdGEubG9jYXRpb24uY291bnRyeTtcbiAgZGF0ZS5pbm5lclRleHQgPSBnZXROZXdEYXRlU3RyaW5nKGRhdGEpO1xuICBjdXJyZW50VGVtcC5pbm5lclRleHQgPSBkYXRhLmN1cnJlbnQudGVtcF9mICsgXCIgwrBGXCI7XG4gIGZlZWxzTGlrZVRlbXAuaW5uZXJUZXh0ID0gZGF0YS5jdXJyZW50LmZlZWxzbGlrZV9mICsgXCIgwrBGXCI7XG4gIGh1bWlkaXR5LmlubmVyVGV4dCA9IGRhdGEuY3VycmVudC5odW1pZGl0eSArIFwiJVwiO1xuICB3aW5kLmlubmVyVGV4dCA9IGRhdGEuY3VycmVudC53aW5kX21waCArIFwiIG1waFwiO1xufVxuXG5mdW5jdGlvbiBnZXROZXdEYXRlU3RyaW5nKGRhdGEpIHtcbiAgbGV0IGN1cnJlbnRUaW1lID0gZGF0YS5sb2NhdGlvbi5sb2NhbHRpbWU7XG4gIGxldCBuZXdEYXRlID0gbmV3IERhdGUoY3VycmVudFRpbWUpO1xuICBsZXQgbmV3RGF0ZVN0cmluZyA9IG5ld0RhdGUudG9EYXRlU3RyaW5nKCk7XG5cbiAgcmV0dXJuIG5ld0RhdGVTdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHNldExvY2F0aW9uRm9yZWNhc3QoZGF0YSkge1xuICBsZXQgZm9yZWNhc3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZvcmVjYXN0X2NvbnRhaW5lclwiKTtcbiAgbGV0IGNhcmRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhaWx5X2NhcmRzXCIpO1xuICBjYXJkQ29udGFpbmVyLnJlbW92ZSgpO1xuICBjYXJkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2FyZENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRhaWx5X2NhcmRzXCIpO1xuICBmb3JlY2FzdENvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkQ29udGFpbmVyKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICBsZXQgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbGV0IGRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBsZXQgY29uZGl0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO1xuICAgIGxldCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGxldCBhdmdUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGxldCBhdmdXaW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIGxldCBkYXlPZldlZWsgPSBjb252ZXJ0RGF5T2ZXZWVrKGRhdGEsIFtpXSk7XG5cbiAgICBjYXJkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGF5XCIgKyBbaV0gKyBcIl9jYXJkXCIpO1xuICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gICAgZGF5LmNsYXNzTGlzdC5hZGQoXCJkYXlcIik7XG4gICAgZGF5LmlubmVyVGV4dCA9IGRheU9mV2VlaztcbiAgICBjb25kaXRpb24uY2xhc3NMaXN0LmFkZChcImNvbmRpdGlvblwiKTtcbiAgICBjb25kaXRpb24uaW5uZXJUZXh0ID0gZGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkuY29uZGl0aW9uLnRleHQ7XG4gICAgZGF0ZS5jbGFzc0xpc3QuYWRkKFwiZGF0ZVwiKTtcbiAgICBkYXRlLmlubmVyVGV4dCA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF0ZTtcbiAgICBhdmdUZW1wLmNsYXNzTGlzdC5hZGQoXCJhdmdfdGVtcFwiKTtcbiAgICBhdmdUZW1wLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYXZnVGVtcF9cIiArIFtpXSk7XG4gICAgYXZnVGVtcC5pbm5lclRleHQgPSBkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRheS5hdmd0ZW1wX2YgKyBcIiDCsEZcIjtcbiAgICBhdmdXaW5kLmNsYXNzTGlzdC5hZGQoXCJhdmdfd2luZFwiKTtcbiAgICBhdmdXaW5kLmlubmVyVGV4dCA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5Lm1heHdpbmRfbXBoICsgXCIgbXBoXCI7XG4gICAgY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZChjYXJkKTtcbiAgICBjYXJkLmFwcGVuZENoaWxkKGRheSk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChjb25kaXRpb24pO1xuICAgIGNhcmQuYXBwZW5kQ2hpbGQoYXZnVGVtcCk7XG4gICAgY2FyZC5hcHBlbmRDaGlsZChhdmdXaW5kKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb252ZXJ0RGF5T2ZXZWVrKGRhdGEsIGkpIHtcbiAgbGV0IGRhdGUgPSBuZXcgRGF0ZShkYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRhdGUpO1xuICBsZXQgZGF5TnVtYmVyID0gZGF0ZS5nZXREYXkoKTtcblxuICBpZiAoZGF5TnVtYmVyID09PSAwKSB7XG4gICAgcmV0dXJuIFwiU3VuZGF5XCI7XG4gIH0gZWxzZSBpZiAoZGF5TnVtYmVyID09PSAxKSB7XG4gICAgcmV0dXJuIFwiTW9uZGF5XCI7XG4gIH0gZWxzZSBpZiAoZGF5TnVtYmVyID09PSAyKSB7XG4gICAgcmV0dXJuIFwiVHVlc2RheVwiO1xuICB9IGVsc2UgaWYgKGRheU51bWJlciA9PT0gMykge1xuICAgIHJldHVybiBcIldlZG5lc2RheVwiO1xuICB9IGVsc2UgaWYgKGRheU51bWJlciA9PT0gNCkge1xuICAgIHJldHVybiBcIlRodXJzZGF5XCI7XG4gIH0gZWxzZSBpZiAoZGF5TnVtYmVyID09PSA1KSB7XG4gICAgcmV0dXJuIFwiRnJpZGF5XCI7XG4gIH0gZWxzZSBpZiAoZGF5TnVtYmVyID09PSA2KSB7XG4gICAgcmV0dXJuIFwiU2F0dXJkYXlcIjtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VNZWFzdXJlbWVudCgpIHtcbiAgaWYgKGN1cnJlbnRNZWFzdXJlbWVudCA9PT0gXCJmXCIpIHtcbiAgICBjdXJyZW50TWVhc3VyZW1lbnQgPSBcImNcIjtcbiAgICBjdXJyZW50VGVtcC5pbm5lclRleHQgPSBkYXRhLmN1cnJlbnQudGVtcF9jICsgXCIgwrBDXCI7XG4gICAgZmVlbHNMaWtlVGVtcC5pbm5lclRleHQgPSBkYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2MgKyBcIiDCsENcIjtcbiAgICB0b2dnbGVNZWFzdXJlLmlubmVyVGV4dCA9IFwiRGlzcGxheSDCsEZcIjtcbiAgICBjaGFuZ2VGb3JlY2FzdE1lYXN1cmVtZW50KFwiZlwiKTtcbiAgfSBlbHNlIGlmIChjdXJyZW50TWVhc3VyZW1lbnQgPT09IFwiY1wiKSB7XG4gICAgY3VycmVudE1lYXN1cmVtZW50ID0gXCJmXCI7XG4gICAgY3VycmVudFRlbXAuaW5uZXJUZXh0ID0gZGF0YS5jdXJyZW50LnRlbXBfZiArIFwiIMKwRlwiO1xuICAgIGZlZWxzTGlrZVRlbXAuaW5uZXJUZXh0ID0gZGF0YS5jdXJyZW50LmZlZWxzbGlrZV9mICsgXCIgwrBGXCI7XG4gICAgdG9nZ2xlTWVhc3VyZS5pbm5lclRleHQgPSBcIkRpc3BsYXkgwrBDXCI7XG4gICAgY2hhbmdlRm9yZWNhc3RNZWFzdXJlbWVudChcImNcIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hhbmdlRm9yZWNhc3RNZWFzdXJlbWVudCh2YXJpYWJsZSkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgIGxldCBhdmdUZW1wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhdmdUZW1wX1wiICsgW2ldKTtcbiAgICBpZiAodmFyaWFibGUgPT09IFwiZlwiKSB7XG4gICAgICBhdmdUZW1wLmlubmVyVGV4dCA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5LmF2Z3RlbXBfYyArIFwiIMKwQ1wiO1xuICAgIH0gZWxzZSBpZiAodmFyaWFibGUgPT09IFwiY1wiKSB7XG4gICAgICBhdmdUZW1wLmlubmVyVGV4dCA9IGRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5LmF2Z3RlbXBfZiArIFwiIMKwRlwiO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBzZXREYXRhKHZhcmlhYmxlKSB7XG4gIGRhdGEgPSB2YXJpYWJsZTtcbiAgY29uc29sZS5sb2coZGF0YSk7XG59XG5cbmZ1bmN0aW9uIGdldEN1cnJlbnRIb3VyKGRhdGEpIHtcbiAgbGV0IGRhdGFEYXRlID0gZGF0YS5sb2NhdGlvbi5sb2NhbHRpbWU7XG4gIGxldCBkYXRlID0gbmV3IERhdGUoZGF0YURhdGUpO1xuICBsZXQgY3VycmVudEhvdXIgPSBkYXRlLmdldEhvdXJzKCk7XG4gIHJldHVybiBjdXJyZW50SG91cjtcbn1cblxuZnVuY3Rpb24gY2hhbmdlQ29sb3JzKGRhdGEpIHtcbiAgbGV0IGN1cnJlbnRIb3VyID0gZ2V0Q3VycmVudEhvdXIoZGF0YSk7XG4gIGlmIChjdXJyZW50SG91ciA+IDYgJiYgY3VycmVudEhvdXIgPD0gMTEpIHtcbiAgICBib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwibGluZWFyLWdyYWRpZW50KCNlOWM0NmEsICMyNjQ2NTMpXCI7XG4gICAgbWFpbkNvbnRhaW5lci5zdHlsZS5jb2xvciA9IFwiIzI2NDY1M1wiO1xuICB9IGVsc2UgaWYgKGN1cnJlbnRIb3VyID4gMTEgJiYgY3VycmVudEhvdXIgPD0gMTcpIHtcbiAgICBib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwibGluZWFyLWdyYWRpZW50KCNlOWM0NmEsICNlNzZmNTEpXCI7XG4gICAgbWFpbkNvbnRhaW5lci5zdHlsZS5jb2xvciA9IFwiIzI2NDY1M1wiO1xuICB9IGVsc2UgaWYgKGN1cnJlbnRIb3VyID4gMTcgJiYgY3VycmVudEhvdXIgPD0gMjApIHtcbiAgICBib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwibGluZWFyLWdyYWRpZW50KCMyYTlkOGYsICMyNjQ2NTMpXCI7XG4gICAgbWFpbkNvbnRhaW5lci5zdHlsZS5jb2xvciA9IFwiI2ZlZmFlMFwiO1xuICB9IGVsc2Uge1xuICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJcIjtcbiAgICBib2R5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiYmxhY2tcIjtcbiAgICBtYWluQ29udGFpbmVyLnN0eWxlLmNvbG9yID0gXCIjZmVmYWUwXCI7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBjaGFuZ2VDb2xvcnMsXG4gIHNldExvY2F0aW9uQ3VycmVudFdlYXRoZXIsXG4gIGNoYW5nZU1lYXN1cmVtZW50LFxuICBzZXREYXRhLFxuICBzZXRMb2NhdGlvbkZvcmVjYXN0LFxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==