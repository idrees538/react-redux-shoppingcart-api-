import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "../store/cartSlice"
export const store = configureStore(
    {
        reducer:{
    cart:cartSliceReducer,}
});