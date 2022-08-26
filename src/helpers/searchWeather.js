import { getData } from "./CRUD"
import { getCoordsMapbox, getUrlWeather } from "./URL"

const searchWeather = async (setState, city) => {
    const coords = await getCoordsMapbox(city)

    await getData(setState, getUrlWeather(coords))

}


export {searchWeather}