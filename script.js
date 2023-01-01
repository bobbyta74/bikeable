//const mylocation = document.querySelector("#mylocation");
const body = document.querySelector("body");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else {
        //mylocation.innerHTML = "Geolocation is disabled";
        console.log("Geolocation disabled")
    }
}

function showPosition(position) {
    //mylocation.innerHTML = String(position.coords.latitude) + " " + String(position.coords.longitude);
    window.latitude = position.coords.latitude;
    window.longitude = position.coords.longitude;

    
}

let weather = {
    "apiKey": "9c1558c33bc2df18ad237c636d12d073",
    fetchWeather: function() {
        fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + window.latitude + "&lon=" + window.longitude + "&units=metric&appid=" + this.apiKey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
    },
    displayWeather:function(data) {
        const{name} = data;
        let{icon, description} = data.weather[0];
        description = description[0].toUpperCase() + description.substr(1);
        const{temp, humidity} = data.main;
        const{speed} = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        body.style.backgroundImage = "url('https://source.unsplash.com/1920x1080/?" + name + "')";
        document.querySelector(".city").textContent = "Weather in " + name;
        document.querySelector(".temp").textContent = String(temp) + "°C";
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").textContent = description;
        document.querySelector(".humidity").textContent = humidity + "%";
        document.querySelector(".wind").textContent = speed + "km/h";

    }
}

getLocation();