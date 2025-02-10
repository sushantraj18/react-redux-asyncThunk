import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productCall } from "../apis/api";


export const productThunk = createAsyncThunk("product thunk",async()=>{
    try{

        return await productCall()

    }catch(e){
        return (e)
    }
})

const countSlice = createSlice({
    name : "count",
    initialState :{
        count : 0,
        loading : false,
        productData : [],
        cartItems : [],
        subTotal : 0


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
        },

        addToCart : (state,action)=>{
            state.cartItems.push(action.payload)
            state.subTotal = Math.round(state.cartItems.reduce((acc,cur)=>acc+cur.price,0)) 
        },

        removeToCart : (state,action)=>{
            const findIndex = state.cartItems.findIndex((items)=>items.id == action.payload.id)
            console.log(findIndex)
            state.cartItems.splice(findIndex,1)
            state.subTotal = Math.round(state.cartItems.reduce((acc,curr)=>acc+curr.price,0))
        }


        
    },
    extraReducers:(builder)=>{
        builder.addCase(productThunk.pending,(state,action)=>{
            state.loading = true
        }),
        builder.addCase(productThunk.fulfilled,(state,action)=>{
            state.loading = false,
            state.productData = action.payload
        }),
        builder.addCase(productThunk.rejected,(state,action)=>{
            state.loading = true
        })
    }
})

export const {inkcrementCount,decrementCount,resetCount,addToCart,removeToCart}= countSlice.actions
export default countSlice.reducer
