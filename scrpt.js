function updateWeather(response){
    let temperatureElement = document.querySelector("#temperature-value");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let iconElement = document.querySelector("#icon");
    let timeElement = document.querySelector("#time");

    let date = new Date (response.data.time *1000);
    timeElement.innerHTML = formatDate(new Date);
    iconElement.innerHTML= `<img src="${response.data.condition.icon_url}" alt= class="weather-app-icon">`
    windElement.innerHTML = `${response.data.wind.speed}km/h`;
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    descriptionElement.innerHTML = response.data.condition.description;
    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(response.data.temperature.current);
}
function formatDate(date){
    let minutes = date.getMinutes();
    let hours = date.getHours();
    

    let days = [
     "Sunday",
     "Monday", 
     "Tuesday", 
     "Wednesday",
     "Thursday",
     "Friday", 
     "Saturday"
    ];
    let day = days[date.getDay()];
    if (minutes <10){
        minutes = `0${minutes}`
    }
    if (hours <10){
        hours = `0${hours}`
    }

    return `${day} ${hours}:${minutes}`;
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

searchcity("Cape Town");

function displayForecast(day){
    let forecastElement = document.querySelector("#forecast");

    let days = ["Fri", "Sat", "Sun", "Mon", "Tue"];
    let forecastHtml = ""
    days.forEach(function(day) {
    
    forecastHtml = forecastHtml +
        ` <div class="weather-forecast-day">
   <div class="forecast-weather-date">${day}</div>
   <div class="forecast-weather-icon">🌤</div>
   <div class="forecast-weather-temperatures ">
    <span class="forecast-weather-temperature-max">19°</span>
    <span class="forecast-weather-temperature-min">10°</span>
   </div>
</div>`;
});

forecastElement.innerHTML = forecastHtml
}
displayForecast();



        





