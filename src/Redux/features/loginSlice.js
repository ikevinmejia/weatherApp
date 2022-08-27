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

        updateData: (state, action) => {
            state.email = action.payload.email
            state.displayName = action.payload.displayName
        }
    }
})


export const {register, logout, updateData} = loginSlice.actions;

export default loginSlice.reducer