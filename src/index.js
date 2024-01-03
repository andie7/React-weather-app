
import React from "react";
import Search from "./search";

 <title>Wheather App</title>
    <link rel="stylesheet" href="src/styles.css" />
  </head>
  <body>
    <div class="container">
      <div class="row">
        <div class="col-6">
          <search />
        </div>

function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let day = days[date.getDay()];
  console.log(day);

  let hours = date.getHours();
  console.log(hours);

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = date.getMinutes();
  console.log(minutes);

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day} ${hours} : ${minutes}`;
}

function search(event) {
  event.preventDefault();

  let cityElement = document.querySelector("#city");

  let cityInput = document.querySelector("#city-name");
  cityElement.innerHTML = cityInput.value;
}

function ConvertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 66;
}

function ConvertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 19;
}

//1
let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);

// 2
let searchForm = document.querySelector("#search-form");

searchForm.addEventListener("submit", search);

//3

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", ConvertToFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", ConvertToCelsius);
