import { configureStore } from "@reduxjs/toolkit";
import loginUserReducer from './features/loginSlice'
import weatherReducer from './features/weatherSlice'

const store = configureStore({
    reducer: {
        login: loginUserReducer,
        weather: weatherReducer,
    }
})

export default store;