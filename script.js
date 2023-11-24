const apiKey = '0edbd97f616cc56ae37ec7d3208036c7';  //api key
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='  //apiURL

const search_input = document.getElementById('search_input')
const search_btn = document.getElementById('search_btn')
const weather_img = document.getElementById('weather_img')

async function checkWeather(city){
    const response = await fetch(apiURL + city + `&appid=${apiKey}`)
    let data = await response.json()

    document.getElementById('city').innerHTML = data.name
    document.getElementById('temp').innerHTML = data.main.temp + ' °C'
    document.getElementById('description').innerHTML = data.weather[0].description
    document.getElementById('humidity').innerHTML = data.main.humidity + ' %'
    document.getElementById('wind').innerHTML = data.wind.speed + ' km/h'

    if(data.weather[0].description == 'clouds'){
        weather_img.src = 'images/clouds.png'
    } 
    else if(data.weather[0].description == 'clear sky'){
        weather_img.src = 'images/clear.png'
    } else if(data.weather[0].description == 'drizzle'){
        weather_img.src = 'images/drizzle.png'
    } else if(data.weather[0].description == 'mist'){
        weather_img.src = 'images/mist.png'
    } else if(data.weather[0].description == 'rain'){
        weather_img.src = 'images/rain.png'
    } else if(data.weather[0].description == 'snow'){
        weather_img.src = 'images/snow.png'
    } else if(data.weather[0].description == 'smoke'){
        weather_img.src = 'https://upload.wikimedia.org/wikipedia/commons/2/23/Smoke_icon_iOS.png'
    } else if(data.weather[0].description == 'scattered clouds'){
        weather_img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Weather-few-clouds.svg/1200px-Weather-few-clouds.svg.png'
    } else if(data.weather[0].description == 'overcast clouds'){
        weather_img.src = 'https://cdn-icons-png.flaticon.com/512/5546/5546134.png'
    } else if(data.weather[0].description == 'haze'){
        weather_img.src = 'images/Haze.png'
    } else if(data.weather[0].description == 'few clouds'){
        weather_img.src = 'https://icons.veryicon.com/png/o/weather/weather-15/few-clouds.png'
    } else if(data.weather[0].description == 'broken clouds'){
        weather_img.src = 'https://cdn.icon-icons.com/icons2/3191/PNG/512/cloudy_clouds_cloud_weather_sky_icon_194252.png'
    } 

    document.getElementById('weather_container').style.display = 'block'
    document.getElementById('extraText').style.display = 'none'

}

search_btn.addEventListener('click', ()=>{
    checkWeather(search_input.value)
})