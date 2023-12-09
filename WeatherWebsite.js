const inputBox = document.querySelector('.input-box');
const SearchBtn = document.getElementById('.SearchBtn');
const Weather_img = document.querySelector('.Weather-img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('.humidity');
const wind_speed = document.getElementById('.wind-speed');
const location_not_found = document.querySelector('.location not found');
const weather_body = document.querySelector('.weather-body');

async function checkWeather(city){
    const api_key = "61a4a935b9b9c8942c4ef2527dda9731";
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}';
    const weather_data = await fetch('${url}').then(response => response.json());


    if(weather_data.cod === '404'){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }

    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    temperature.innerHTML = '${Math.round(weather_data.main.temperature - 273.15)}°C';
    description.innerHTML = '${weather_data.weather[0].description}';
    humidity.innerHTML = '${ weather_data.main.humidity}%';
    wind_speed.innerHTML = '${weather_data.main.wind.speed}Km/H';

    switch(weather_data.weather[0].main){
        case 'Clouds':
            Weather_img.scr = "./Cloudy.jpg";
            break;
        case 'Clear':
            Weather_img.scr = "./sunny.webp";
            break;
        case 'Rain':
            Weather_img.scr = "./Rainy.jpg";
            break;
        case 'Mist':
            Weather_img.scr = "./Mist.jpeg";
            break;
        case 'Snow':
            Weather_img.scr = "./Snow.jpeg";  
            break;
    }
}

SearchBtn.addEventListener('click',()=>{
     checkWeather(inputBox.value);
});