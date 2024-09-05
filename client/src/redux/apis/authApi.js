import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const AuthApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BACKEND_URL}/auth`,
    // baseUrl: `http://localhost:5000/api/auth`,
    credentials: "include",
  }),
  endpoints: (builder) => {
    return {
      loginAdmin: builder.mutation({
        query: (userData) => {
          return {
            url: "/login-admin",
            method: "POST",
            body: userData,
          };
        },
        transformResponse: (data) => data.result,
      }),
      verifyAdminOtp: builder.mutation({
        query: (userData) => {
          return {
            url: "/verify-admin-otp",
            method: "POST",
            body: userData,
          };
        },
        transformResponse: (data) => {
          localStorage.setItem("olx-admin", JSON.stringify(data.result));
          return data.result;
        },
      }),
      logoutAdmin: builder.mutation({
        query: (userData) => {
          return {
            url: "/logout-admin",
            method: "POST",
            body: userData,
          };
        },
        transformResponse: (data) => {
          localStorage.removeItem("olx-admin");
          return data.result;
        },
      }),
    };
  },
});

export const { useLoginAdminMutation, useVerifyAdminOtpMutation,useLogoutAdminMutation } = AuthApi;
