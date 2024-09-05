import { configureStore } from "@reduxjs/toolkit";
import { AuthApi } from "./apis/authApi";
import authSlice from "./slices/authSlice";


const reduxStore = configureStore({
    reducer: {
        [AuthApi.reducerPath]:AuthApi.reducer,
        auth:authSlice
    },
    middleware:def=>[...def(),AuthApi.middleware]
})

export default reduxStore