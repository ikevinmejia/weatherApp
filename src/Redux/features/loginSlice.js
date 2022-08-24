import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    id: "1",
    email: "mail@mail.com",
    password: "****",
    displayName: 'nickname'
}

export const loginSlice = createSlice({
    name: 'loginUser',
    initialState: initialState,
    reducers: {
        register:(state, action) => {
         return action.payload
        },
        logout: (state, action) => {
            return state = null
          },
    }
})


export const {register, logout} = loginSlice.actions;

export default loginSlice.reducer