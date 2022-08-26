import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    lon: "-74.08083",
    lat: "4.59889",
}

export const weatherSlice = createSlice({
    name: 'weather',
    initialState: initialState,
    reducers: {
        getCoords:(state, action) => {
         return action.payload
        },
        infoWeather: (state, action) => {
            return  action.payload
        },
    }
})

export const {getCoords, infoWeather} = weatherSlice.actions;

export default weatherSlice.reducer