let APPID = "18d71c93190f1063c2db66d2695ae9fa"; 
let temp
let loc
let icon
let humidity
let wind
let direction


function updateByZip(zip){
    let url = "https://openweathermap.org/city" + "zip" + zip + "APPID" + APPID; 
    sendRequest(url); 
}

function sendRequest(url){
    let xmlhttp = new XMLHttpRequest(); 
    xml.http.onreadystatechange = function() {
        if(xmlhttp.readyState == xmlhttp.status == 200)
        let data = JSON. parse(xmlhttp.responseText); 
        let weather = {}; 
        weather.icon = data.weather[0].id; 
        weather.humidity = data.main.humidity; 
        weather.wind = data.wind.speed; 
        weather.direction = data.wind.deg; 
        weather.loc = data.name;   
        weather.temp = data.main.temp; 
        update(weather); 

    }
}

xmlhttp.open("GET", url, true){
    xmlhttp.send(); 
}

function update(weather){
    wind.innerHTML = weather.wind; 
    direction.innerHTML = weather.direction; 
    humidity.innerHTML = weather.temp; 
    loc.innerHTML = weather.loc; 
    temp.innerHTML = weather.temp; 
    //inserire tra le virgolette il link dell'immagine di riferimento
    icon.src = "" + weather.icon + "png"; 
    console.log(icon.src); 
}

window.onload = function (){
    temp = document.getElementById("temperature"); 
    loc = document.getElementById("location"); 
    icon = document.getElementById("icon"); 
    humidity = document.getElementById("humidity"); 
    wind = document.getElementById("wind"); 
    direction = document.getElementById("direction");
    
  updateByZip(); 

    let weather = (); 
    weather.wind = 3.5; 
    weather.direction = "N"; 
    weather.humidity = "35"; 
    weather.loc = "Berlin"; 
    weather.temp = "0"; 
    weather.icon = "200"; 
    

    update(weather); 
}
