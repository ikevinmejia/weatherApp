import { getDataAxios } from "./CRUD";

const weatherApiKey = import.meta.env.VITE_APIKEYOPENWEATHER;
const mapboxApiKey = import.meta.env.VITE_APIKEYMAPBOX;


const getCoordsMapbox = async(city) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=${mapboxApiKey}`

    const {features} = await getDataAxios(url)
    const [lon, lat] = await features[0].center;

    const coords = {lon, lat}
    console.log(coords);
    return coords
}

const getUrlWeather = ({lon, lat}) => {
    return `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${weatherApiKey}`
}

const getIconWeather = (icon) => {
    return `https://openweathermap.org/img/wn/${icon}@2x.png`
}

export {
    getCoordsMapbox,
    getUrlWeather,
    getIconWeather
}



// https://api.openweathermap.org/data/2.5/weather?lat=33.44&lon=-94.04&appid=c163ec09e9af35c3d9e7bece43d1bd07


// https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=c163ec09e9af35c3d9e7bece43d1bd07



// https://api.mapbox.com/geocoding/v5/mapbox.places/bogota.json?access_token=pk.eyJ1IjoiaWtldmlubWVqaWEiLCJhIjoiY2w3NndmOHZiMGpucjN2cWhwMDJpZnF1byJ9.k_yAPnnCmPBsBq7QkpBV-A
