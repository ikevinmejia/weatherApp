const weatherApiKey = import.meta.env.VITE_APIKEYOPENWEATHER;
const mapboxApiKey = import.meta.env.VITE_APIKEYMAPBOX;


const getCoordsMapbox = (city) => {
    return `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=${mapboxApiKey}`
}

const getUrlWeather = ({lat, lon}) => {
    return `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&lang=es&appid=${weatherApiKey}`
}

export {
    getCoordsMapbox,
    getUrlWeather
}




