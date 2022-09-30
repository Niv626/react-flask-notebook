import { configureStore } from "@reduxjs/toolkit"
import notesReducer from "./features/notes/notesSlice"
import apiReducer from "./features/api/apiSlice"

export const store = configureStore({
    reducer: {
        notes: notesReducer,

    }
})