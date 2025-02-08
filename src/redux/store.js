import { configureStore } from "@reduxjs/toolkit";
import countSlice from "./slice";

export const store = configureStore({
    reducer : {
        count : countSlice
    }
})