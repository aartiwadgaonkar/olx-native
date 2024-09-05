import { createSlice } from "@reduxjs/toolkit";
import { AuthApi } from "../apis/authApi";

const authSlice= createSlice({
    name: "authSlice",
    initialState: {admin:JSON.parse(localStorage.getItem("olx-admin"))},
    reducers: {
        invalidate: (state, { payload }) => {
            payload.forEach(item => {
                state[item] = false
            })
        }
    },
    extraReducers: builder => builder
        .addMatcher(AuthApi.endpoints.loginAdmin.matchFulfilled, (state, { payload }) => {
            state.admin = payload
        })
        .addMatcher(AuthApi.endpoints.verifyAdminOtp.matchFulfilled, (state, { payload }) => {
            state.admin = payload
        })
        .addMatcher(AuthApi.endpoints.logoutAdmin.matchFulfilled, (state, { payload }) => {
            state.admin = null
        })
       
       
})

export const { invalidate } = authSlice.actions
export default authSlice.reducer