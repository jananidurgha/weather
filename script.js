const apiKey = "put you api key";

function getWeather() {
  const city = document.getElementById("cityInput").value;
  const weatherInfo = document.getElementById("weatherInfo");

  if (city === "") {
    weatherInfo.innerHTML = "Please enter a city name.";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      const temp = data.main.temp;
      const condition = data.weather[0].description;
      const cityName = data.name;
      const country = data.sys.country;

      weatherInfo.innerHTML = `
        <h2>${cityName}, ${country}</h2>
        <p>🌡️ Temperature: ${temp} °C</p>
        <p>⛅ Condition: ${condition}</p>
      `;
    })
    .catch(error => {
      weatherInfo.innerHTML = "❌ City not found. Please check spelling.";
    });
}

