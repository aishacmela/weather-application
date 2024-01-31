function updateWeather(response){
    let temperatureElement = document.querySelector("#temperature-value")
    let cityElement = document.querySelector("#city");

   
    
    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(response.data.temperature.current)



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