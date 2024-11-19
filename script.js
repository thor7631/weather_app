
const apiKey = "f5408ddd42c65dae66085a9737fdbbec";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=  ";


const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


/* #################################################### my learnings ##############################################
async function checkWeather() {
    const cityName = searchBox.value;
   
        const response = await fetch(`${apiUrl}${cityName}&appid=${apiKey}`);

            
        //  console.log(await response.json().main.temp);
        //## upar ham  galti kie the ##-> response.json() is an asynchronous function means it is needed to be resolved before
        // any we access the values of json object and we are trying to log it synchronously which will throw an undefined error

        //correct syntax: const data=await response.json();console.log(data.main.temp);
    
}


searchBtn.addEventListener("click",checkWeather);


*/

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();

document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

if(data.weather[0].main == "Clouds"){
    weatherIcon.src = "images/clouds.png";
}
else if(data.weather[0].main == "Clear"){
    weatherIcon.src = "images/clear.png";
}
else if(data.weather[0].main == "Rain"){
    weatherIcon.src = "images/rain.png";
}
else if(data.weather[0].main == "Drizzle"){
    weatherIcon.src = "images/drizzle.png";
}
else if(data.weather[0].main == "Mist"){
    weatherIcon.src = "images/mist.png";
}

document.querySelector(".weather").style.display = "block";
document.querySelector(".error").style.display = "none";
    }

    

}


searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
