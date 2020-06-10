
function submit(){
    event.preventDefault() 
    var key = "94a8ffec8561a3c29ea48d78f0dd77b6";
    var allCity = document.querySelector("#inputBox").value
    
    localStorage.setItem("cities", allCity)
    
    for(var i = 4; i< localStorage.length; i++){
    var field = document.getElementById("localValue")
    var localKey = localStorage.getItem("cities")
    field.innerHTML+=localKey
    console.log(localKey)
    }

submitCity(key,allCity)
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
    var clear10 = document.getElementById("name4")
    clear10.innerHTML = "";
    var clear11 = document.getElementById("date1")
    clear11.innerHTML="";
    var clear12 = document.getElementById("date2")
    clear12.innerHTML = "";
    var clear13 = document.getElementById("date3")
    clear13.innerHTML = "";
    var clear14 = document.getElementById("date4")
    clear14.innerHTML = "";
    var clear15 = document.getElementById("date5")
    clear15.innerHTML="";
    var clear16 = document.getElementById("hum1")
    clear16.innerHTML="";
    var clear17 = document.getElementById("hum2")
    clear17.innerHTML="";
    var clear18 = document.getElementById("hum3")
    clear18.innerHTML="";
    var clear19 = document.getElementById("hum4")
    clear19.innerHTML="";
    var clear20 = document.getElementById("hum5")
    clear20.innerHTML="";
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
})} 

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
})}

 //show Forecast objects
function showWeather(data){
    for (var i=1; i<=36; i++)
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
    openPara2.innerHTML+=htmlstring1+=data.list[9].main.temp
    openPara3.innerHTML+=htmlstring2+=data.list[18].main.temp
    openPara4.innerHTML+=htmlstring3+=data.list[27].main.temp
    openPara5.innerHTML+=htmlstring4+=data.list[36].main.temp

    var htmlstring5="";
    var htmlstring6="";
    var htmlstring7="";
    var htmlstring8="";
    var htmlstring9="";

    var openPara6 = document.getElementById("date1")
    var openPara7 = document.getElementById("date2")
    var openPara8 = document.getElementById("date3")
    var openPara9 = document.getElementById("date4")
    var openPara10 = document.getElementById("date5")
    
    openPara6.innerHTML+=htmlstring5+=data.list[0].dt_txt
    openPara7.innerHTML+=htmlstring6+=data.list[9].dt_txt
    openPara8.innerHTML+=htmlstring7+=data.list[18].dt_txt
    openPara9.innerHTML+=htmlstring8+=data.list[27].dt_txt
    openPara10.innerHTML+=htmlstring9+=data.list[36].dt_txt

    var htmlstring10 = "";
    var htmlstring11 = "";
    var htmlstring12 = "";
    var htmlstring13 = "";
    var htmlstring14 = "";

    var openPara11 = document.getElementById("hum1")
    var openPara12 = document.getElementById("hum2")
    var openPara13 = document.getElementById("hum3")
    var openPara14 = document.getElementById("hum4")
    var openPara15 = document.getElementById("hum5")

    openPara11.innerHTML+=htmlstring10+=data.list[0].main.humidity
    openPara12.innerHTML+=htmlstring11+=data.list[9].main.humidity
    openPara13.innerHTML+=htmlstring12+=data.list[18].main.humidity
    openPara14.innerHTML+=htmlstring13+=data.list[27].main.humidity
    openPara15.innerHTML+=htmlstring14+=data.list[36].main.humidity
    
   
    if(data.list[0].rain){
       document.getElementById("card-body").style.backgroundImage = "url('https://p7.hiclipart.com/preview/868/92/898/rain-cloud-storm-weather-clip-art-rain-thumbnail.jpg')"
    }else{
       document.getElementById("card-body").style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRilkk1OFjxRdnXOqW7XgyeTWId5RJ4-GMHF6N6GFolW6b-4IBx&usqp=CAU')"
    }
    if(data.list[9].rain){
    document.getElementById("card-body1").style.backgroundImage = "url('https://p7.hiclipart.com/preview/868/92/898/rain-cloud-storm-weather-clip-art-rain-thumbnail.jpg')"
    }else{
    document.getElementById("card-body1").style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRilkk1OFjxRdnXOqW7XgyeTWId5RJ4-GMHF6N6GFolW6b-4IBx&usqp=CAU')"
    }
    if(data.list[18].rain){
    document.getElementById("card-body2").style.backgroundImage = "url('https://p7.hiclipart.com/preview/868/92/898/rain-cloud-storm-weather-clip-art-rain-thumbnail.jpg')"
    }else{
    document.getElementById("card-body2").style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRilkk1OFjxRdnXOqW7XgyeTWId5RJ4-GMHF6N6GFolW6b-4IBx&usqp=CAU')"
    }
    if(data.list[27].rain){
    document.getElementById("card-body3").style.backgroundImage = "url('https://p7.hiclipart.com/preview/868/92/898/rain-cloud-storm-weather-clip-art-rain-thumbnail.jpg')"
    }else{
    document.getElementById("card-body3").style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRilkk1OFjxRdnXOqW7XgyeTWId5RJ4-GMHF6N6GFolW6b-4IBx&usqp=CAU')"
    }
    if(data.list[36].rain){
    document.getElementById("card-body4").style.backgroundImage = "url('https://p7.hiclipart.com/preview/868/92/898/rain-cloud-storm-weather-clip-art-rain-thumbnail.jpg')"
    }else{
    document.getElementById("card-body4").style.backgroundImage = "url('https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRilkk1OFjxRdnXOqW7XgyeTWId5RJ4-GMHF6N6GFolW6b-4IBx&usqp=CAU')"
}}

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
        var dataWind = data.current.wind_speed
        console.log(data)
        console.log(data.list)
        showCurrent(dataUvi, dataTemp, dataHum, dataWind)
})}

function showCurrent (dataUvi, dataTemp, dataHum, dataWind){
    var htmlstring1 = "";
    var openPara1 = document.getElementById("name")
    openPara1.innerHTML+=htmlstring1+=dataUvi
    console.log(dataUvi)
    
    if(dataUvi >=6){
    console.log("this is hot")
    document.getElementById("name").style.color = "red";

    }else if(dataUvi < 6){
    document.getElementById("name").style.color = "blue";
    }
    console.log("this is cold");

    var htmlstring2 = "";
    var openPara2 = document.getElementById("name2")
    openPara2.innerHTML+=htmlstring2+=dataTemp

    var htmlstring3 = "";
    var openPara3 = document.getElementById("name3")
    openPara3.innerHTML+=htmlstring3+=dataHum

    var htmlstring4 = "";
    var openPara4 = document.getElementById("name4")
    openPara4.innerHTML+=htmlstring4+=dataWind
}
    
