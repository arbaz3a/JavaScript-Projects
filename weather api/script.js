const url =
  "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API Key}"; // API For weather forecast

let temp = document.getElementById("temp"); // getting temp id from html
let wind = document.getElementById("wind"); // getting wind id from html
let feel = document.getElementById("feel"); // getting feel id from html
let humi = document.getElementById("humi"); // getting humi id from html
let form = document.querySelector("#weatherForm"); // getting form id from html
const cityname = document.querySelector(".cityname");

const apikey = "071fe10f3ac9d3db1b9ce5e80cfc46f3"; // api key generate from openweathermap web
form.addEventListener("submit", async (evt) => {
  // event listener active after click on the submit button
  evt.preventDefault(); // stop from refreshing page after clicking the submit button
  let city = document.querySelector("#inputField").value; // getting value after giving city name in input tag ( city name )
  // console.log(city); // show the city name

  const urlmake = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;
  // console.log(urlmake); // display the final url
  try {
    let response = await fetch(urlmake); // getting response from fetching
    if (!response.ok) {
      throw new Error(`Error, while response: ${response.status}`); // checking the response error
    }
    let data = await response.json(); // convert into json readable
    // console.log(data); // print data which we got
    cityname.innerText = city; // change the cityname in the h2 tag according to the user

    // I used toFixed(2) to format the temperature values to two decimal places without toFixed(2) got 25.678234°C
    // If you don't need such precision and prefer whole numbers, you could use Math.round() instead
    // at kelvin to celsius place e.g " let tempCelsius = Math.round(data.main.temp - 273.15); "

    // got data from api in  kelvin form now convert this into celsius
    let tempCelsius = data.main.temp - 273.15; // kelvin to celsius
    let feelsLikeCelsius = data.main.feels_like - 273.15; // kelvin to celsius

    temp.innerText = tempCelsius.toFixed(2) + "°C"; // change inner text
    wind.innerText = data.wind.speed + " m/s"; // change inner text
    feel.innerText = feelsLikeCelsius.toFixed(2) + "°C"; // change inner text
    humi.innerText = data.main.humidity + "%"; // change inner text
  } catch (err) {
    console.error("Error, while fetching the API,", err); // display error if try not working
  }
});
