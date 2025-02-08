import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
    name : "count",
    initialState :{
        count : 0
    },
    reducers : {
        inkcrementCount : (state,action)=>{
            if(state.count == 20){
                return
            }
            state.count = action.payload
        },
        decrementCount : (state,action)=>{
            if(state.count <= 0){
                return 
            }
            state.count = action.payload
        },
        resetCount : (state,action)=>{
            state.count = 0
        }
    }
})

export const {inkcrementCount,decrementCount,resetCount}= countSlice.actions
export default countSlice.reducer
