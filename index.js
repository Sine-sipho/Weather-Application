// import axios from "axios";

function addZero(num) {
  if (num < 10) {
    num = "0" + num;
  }
  return num;
}

function day() {
  let now = new Date();
  let hour = addZero(now.getHours());
  let minutes = addZero(now.getMinutes());

  let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = weekdays[now.getDay()];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[now.getMonth()];

  let time = document.getElementById("day");
  time.innerHTML = `${day}, ${month} ${hour}:${minutes}`;

  let nextday = weekdays[now.getDay()];
  console.log(nextday);
}
day();
//Weekly forecast

//
// function showCityName(event) {
//   event.preventDefault();
//   let cityValue = document.querySelector("#search-input").value;
//   let city = document.querySelector("#city-name");
//   city.innerHTML = cityValue;
//   cityValue = "";
// }

// function search() {
//   let button = document.querySelector("#search-button");
//   button.addEventListener("click", showCityName);
// }
// search();

function showTemperature(response) {
  let city = document.getElementById("city-name");
  let temp = document.getElementById("current-temp");
  let currenttemperature = Math.round(response.data.temperature.current);
  city.innerHTML = response.data.city;
  temp.innerHTML = currenttemperature;
}

function search() {
  let currentCity = document.getElementById("search-input").value;

  let key = "34dcb3cfedt4654990206a21091oab73";
  let weatherUrl = `https://api.shecodes.io/weather/v1/current?query=${currentCity}&key=${key}&units=metric`;
  axios.get(weatherUrl).then(showTemperature);
}

document.getElementById("btn").addEventListener("click", search);
