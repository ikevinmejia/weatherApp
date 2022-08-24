const weatherApiKey = import.meta.env.VITE_APIKEYOPENWEATHER;
const mapboxApiKey = import.meta.env.VITE_APIKEYMAPBOX;


const getCoordsMapbox = (city) => {
    return `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=${mapboxApiKey}`
}

const getUrlWeather = ({lat, lon}) => {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${weatherApiKey}`

}

export {
    getCoordsMapbox,
    getUrlWeather
}



// https://api.openweathermap.org/data/2.5/weather?lat=33.44&lon=-94.04&appid=c163ec09e9af35c3d9e7bece43d1bd07


// https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid={9389f9f98d08feff96e6474183011757}




