import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const ContactSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
    tagTypes: ["tagName"],
    endpoints: (builder) => {
        return {
            getUsers: builder.query({
                query: () => {
                    return {
                        url: "/apiEndPoint",
                        method: "GET"
                    }
                },
                providesTags: ["tagName"]
            }),
            addUser: builder.mutation({
                query: userData => {
                    return {
                        url: "/apiEndPoint",
                        method: "POST",
                        body: userData
                    }
                },
                invalidatesTags: ["tagName"]
            }),
        
        }
    }
})

export const { useGetUsersQuery, useAddUserMutation} = ContactSlice
