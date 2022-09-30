import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from '../../../api/notes'



const initialState = {
    notes: [],
    status: 'idle',
    error: null
}

export const fetchNotes = createAsyncThunk('notes/FetchNotes', async () => {
    try {
        const res = await api.get('/notes')
        return [...res.data]
    }
    catch (e){
        console.log(e)
    }
})


export const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addNote: (state, action) => {
            state.notes.push(action.payload)
        },
        removeNote: () =>{},
    },
    extraReducers(builder) {
        builder
            .addCase(fetchNotes.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchNotes.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.notes = state.notes.concat(action.payload)
            })
            .addCase(fetchNotes.rejected, (state, action)  => {
                state.status = 'failed'
            })
    }
})

export const getAllNotes = (state) => state.notes.notes


export const { addNote } = notesSlice.actions

export default notesSlice.reducer