import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000' }),
    endpoints: (builder) => ({
        getNotes: builder.query({
            query: () => '/notes'
        })
    })
})

export const {
    useGetNotesQuery
} = apiSlice

export default apiSlice.reducer