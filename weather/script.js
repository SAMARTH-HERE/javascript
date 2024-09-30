const apiKey = "27d248241ca2847ab00bc17707bb3239";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

const searchButton = document.querySelector(".btnsrc"); // Updated to select using class
const searchBox = document.querySelector(".text");

async function checkWeather(city) {
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}&units=metric`);
    const data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    
    const weatherCondition = data.weather[0].main.toLowerCase();
    const weatherImage = document.getElementById("pics");

    if (weatherCondition.includes("clear")) {
        weatherImage.src = "./images/clear.png";
    } else if (weatherCondition.includes("cloud")) {
        weatherImage.src = "./images/clouds.png";
    } else if (weatherCondition.includes("rain")) {
        weatherImage.src = "./images/rain.png";
    } 
    else if (weatherCondition.includes("mist")) {
        weatherImage.src = "./images/mist.png";
    }
    else {
        weatherImage.src = "./images/default.png"; // A default image for unknown conditions
    }
}
window.onload = () => {
    checkWeather("Patna");
};

searchButton.addEventListener("click", () => {
    checkWeather(searchBox.value);
});
