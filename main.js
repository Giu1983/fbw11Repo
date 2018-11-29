const appKey = "18d71c93190f1063c2db66d2695ae9fa";

let searchBtn = document.getElementById("searchBtn");
let searchInput = document.getElementById("search-txt");
let cityNnm = document.getElementById("city-name"); 
let icn = document.getElementById("icn"); 
let temperature = document.getElementById("temp"); 
let humidity = document.getElementById("humidity-div"); 

searchBtn.addEventListener("click", findWeatherDetails); 
searchInput.addEventListener("keyup", enterFunction); 

function enterFunction (event) {
    if(event.key === "Enter") {
        findWeatherDetails(); 

    }
}

function myResponse(response) {
    let jsonObject = JSON.parse(response); 
    cityName.innerHTML = jsonObject.name; 
    icon.src = "http://openweathermap.org/img/w/"+ jsonObject.weather[0].icon + ".png"; 
    temperature.innerHTML = jsonObject.main.humidity + "%"; 
}

function httpRequestAsync(url, callback)
{
    console.log("hello"); 
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => {
        if(httpRequest.readyState == 4 && httpRequest.status == 200)
        callback(httpRequest.responseText); 

    }
    httpRequest.open("GET", url, true); //true for asynchronous
    httpRequest.send(); 
}
