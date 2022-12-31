let weather = {
    "apiKey": "9c1558c33bc2df18ad237c636d12d073",
    fetchWeather: function() {
        fetch("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&units=metric&appid=" + this.apiKey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
    },
    displayWeather:function(data) {
        const{name} = data;
        const{icon, description} = data.weather[0];
        const{temp, humidity} = data.main;
        const{speed} = data.wind;
        console.log(name, icon, description, temp, humidity, speed); 
    }
}