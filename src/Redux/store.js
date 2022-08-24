import { configureStore } from "@reduxjs/toolkit";
import loginUserReducer from './features/loginSlice'

const store = configureStore({
    reducer: {
        login: loginUserReducer
    }
})

export default store;