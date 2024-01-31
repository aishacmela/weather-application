function updateWeather(response){
    let temperatureElement = document.querySelector("#temperature-value");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let iconElement = document.querySelector("#icon")
    iconElement.innerHTML= `<img src="${response.data.condition.icon_url}" alt= class="weather-app-icon"
            >`

    windElement.innerHTML = `${response.data.wind.speed}km/h`;
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    descriptionElement.innerHTML = response.data.condition.description;
    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(response.data.temperature.current);
}


function searchcity(city){
 let apiKey = `4ce023e4f48aaf8bd6a4cb7eo6dbd3ft`
 let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`
axios.get(apiUrl).then(updateWeather)
}


function search(event){
    event.preventDefault();
    let searchInput = document.querySelector("#search-input");
   
    searchcity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", search);

searchcity("Cape Town")