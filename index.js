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
}
day();

function showCityName(event) {
  event.preventDefault();
  let cityValue = document.querySelector("#search-input").value;
  let city = document.querySelector("#city-name");
  city.innerHTML = cityValue;
}

function search() {
  let button = document.querySelector("#search-button");
  button.addEventListener("click", showCityName);
}
search();

let key = "34dcb3cfedt4654990206a21091oab73";
let weatherUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}&units=metric`;

axios.get(weatherUrl).then();
