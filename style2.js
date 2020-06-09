


function submit(){
    event.preventDefault() 
    var key = "94a8ffec8561a3c29ea48d78f0dd77b6";
    var allCity = document.querySelector("#inputBox").value
    submitCity(key,allCity)
   localStorage.setItem("cities", allCity)
   
 var clear =  document.getElementById("openPara")
 var clear2 =document.getElementById("openPara2")
 var clear3 =document.getElementById("openPara3")
 var clear4 =document.getElementById("openPara4")
 var clear5 =document.getElementById("openPara5")
 clear.innerHTML = "";
   clear2.innerHTML = "";
   clear3.innerHTML = "";
   clear4.innerHTML = "";
   clear5.innerHTML = "";
 var clear6 = document.getElementById("openPara1")
clear6.innerHTML="";
var clear7 = document.getElementById("name")
clear7.innerHTML = "";
var clear8 = document.getElementById("name2")
clear8.innerHTML= "";
var clear9 = document.getElementById("name3");
clear9.innerHTML = "";

}

async function submitCity(key,allCity){
    var weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${allCity}&appid=${key}`;
    const fetchData = await fetch(weatherUrl)
    console.log(fetchData)
    const fetchJsonData = fetchData.json()
    fetchJsonData.then(function(data){
        console.log(data)
        var dataLat = data.coord.lat
        var dataLon = data.coord.lon
        var dataName = data.name
        console.log(`${dataLon} ${dataLat}`)
    submitWeather(key, dataLat, dataLon)
    currentWeather(key, dataLat, dataLon)
    getCityName(dataName)
    
    })
} 

//Get City Name
function getCityName(dataName){
var htmlstring1 = "";
var getName = document.getElementById("openPara1")
getName.innerHTML+=htmlstring1+=dataName
console.log(dataName)
}

// Five day forecast
async function submitWeather (key, dataLat, dataLon){
    var forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${dataLat}&lon=${dataLon}&units=metric&appid=${key}`;
    const fetchData = await fetch(forecastUrl)
    console.log(fetchData)
    var fetchJsonData = fetchData.json()
    fetchJsonData.then(function(data){
    
        console.log(data)
        console.log(data.list)
        console.log(data.list[0])
        
        showWeather(data)
    
    })
}

 //show Forecast objects
 function showWeather(data){
    for (var i=1; i<=5; i++)
    console.log(data.list[i])
    var htmlstring = "";
    var htmlstring1 = "";
    var htmlstring2 = "";
    var htmlstring3 = "";
    var htmlstring4 = "";
    var openPara = document.getElementById("openPara")
    var openPara2 = document.getElementById("openPara2")
    var openPara3 = document.getElementById("openPara3")
    var openPara4 = document.getElementById("openPara4")
    var openPara5 = document.getElementById("openPara5")

    
    openPara.innerHTML+=htmlstring+=data.list[0].main.temp
   
    openPara2.innerHTML+=htmlstring1+=data.list[1].main.temp
   
    openPara3.innerHTML+=htmlstring2+=data.list[2].main.temp
    
    openPara4.innerHTML+=htmlstring3+=data.list[3].main.temp
   
    openPara5.innerHTML+=htmlstring4+=data.list[4].main.temp
   
    }

//Current weather
async function currentWeather (key, dataLat, dataLon){
    var currentUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${dataLat}&lon=${dataLon}&units=metric&appid=${key}`;
    const fetchData = await fetch(currentUrl)
    console.log(fetchData)
    var fetchJsonData = fetchData.json()
    fetchJsonData.then(function(data){
        var dataUvi = data.current.uvi
        var dataTemp = data.current.temp
        var dataHum = data.current.humidity
        console.log(data)
        console.log(data.list)
        showCurrent(dataUvi, dataTemp, dataHum)
        
    })}

    
     function showCurrent (dataUvi, dataTemp, dataHum){
        
        var htmlstring1 = "";
        var openPara1 = document.getElementById("name")
    openPara1.innerHTML+=htmlstring1+=dataUvi
    console.log(dataUvi)
    
    if(dataUvi > 5){
        console.log("this is hot")
        document.getElementById("name").style.color = "red";

    }else if(dataUvi < 5){
        document.getElementById("name").style.color = "blue";
    }
        console.log("this is cold");

        var htmlstring2 = "";
var openPara2 = document.getElementById("name2")
openPara2.innerHTML+=htmlstring2+=dataTemp

var htmlstring3 = "";
var openPara3 = document.getElementById("name3")
openPara3.innerHTML+=htmlstring3+=dataHum
    }
    
