const form = document.getElementById("weather-form");
const cityInput = document.getElementById("city");
const resultDiv = document.getElementById("result");

const fakeWeather = {
  London: { temp: 18, condition: "Cloudy" },
  Lagos: { temp: 30, condition: "Sunny" },
  Uxbridge: { temp: 17, condition: "Partly cloudy" },
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const city = cityInput.value.trim();
  if (!city) return;

  const data = fakeWeather[city] || { temp: "N/A", condition: "Unknown" };
  resultDiv.textContent = `${city}: ${data.temp}°C, ${data.condition}`;
});
