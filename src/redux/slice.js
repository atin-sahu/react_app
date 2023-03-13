import { createSlice } from "@reduxjs/toolkit"

const conterSlice = createSlice({
    name:"conter",

    initialState:0,

    reducers:{
        increment : (state)=>state+1,
        decrement:(state)=>state-1,
    }
})


export const {increment,decrement} = conterSlice.actions;
export default conterSlice.reducer;
