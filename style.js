var submit = document.getElementById("submitBtn");
submit.addEventListener("click", showList);

var key = "94a8ffec8561a3c29ea48d78f0dd77b6";


var cities = document.getElementById("citiesSearched");

async function submitWeather(){
    var allCity = document.querySelector("#inputBox")
    var weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${allCity}&appid=${key}`;
console.log(allCity)
await fetch(weatherUrl,{
    method:"GET"
})
.then(data => (data.json()))
.then(response=> showList(response))
}
function showList(data){
    data.coord.lat
    console.log(data.coord.lat)
    document.getElementById("citiesSearched").innerHTML = data.coord.lat
    var forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${key}`;
var submit = document.addEventListener("click", submitForecast);


async function submitForecast(){

await fetch(forecastUrl,{
    method:"GET"
})
.then(data => (data.json()))
.then(response=> showforecast(response))
}
function showforecast(data){
    for(var i=1; i<= 5; i++){
         console.log(data.list[i])
         cities.innerHTML+=data.list[i].dt
}
}submitForecast()

}


