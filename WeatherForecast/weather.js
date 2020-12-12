"using strict;"
document.getElementById("forecast").addEventListener("click", getData);
console.log("hello");
function getData(){
    var zipcode = document.getElementById("zipcode").value;

    getWeather(zipcode);
}
function getWeather(zip){
    var endpoint = "https://api.openweathermap.org/data/2.5/weather";
    var apiKey  = "1307007a7da1aeb5b59930a312a42cd3";
    var queryString="zip=" + zip + "&units=imperial&appid=" + apiKey;
    var url = endpoint + "?" + queryString;
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load",responseReceivedHandler);
    xhr.responseType="json";
    xhr.open("GET", url);
    xhr.send();
}
function responseReceivedHandler(){
    var weatherInfo = document.getElementById("weatherInfo");
    if (this.status ===200) {
        //console.log(this.response.name);
        weatherInfo.innerHTML = 
            "<p>City:" + this.response.name + "</p>" + "<p>Current temp: "+ this.response.main.temp + "&deg;F</p>" + "<p>Desc:" + this.response.weather[0].description + "</p>" + "<p>Humidity: " + this.response.main.humidity + "% </p>";
    }
    else {
        weatherInfo.innerHTML = "Weather data unavailable.";
    }
}