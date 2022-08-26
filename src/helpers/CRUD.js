import axios from "axios";

const getData = async(state, url) => {
    const resp = await axios.get(url)
    state(resp.data)
}

const getDataAxios = async(url) => {
    const resp = await axios.get(url)
    return resp.data
}

export {
    getData,
    getDataAxios
}