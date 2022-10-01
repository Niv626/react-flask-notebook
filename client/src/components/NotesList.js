import React, { useContext, useEffect, useState } from 'react'
import Note from './Note'
import './notes-list.css'
import { AddNote } from './AddNote'
import Header from './Header'
// import {  addNote } from './app/features/notes/notesSlice'
import { useSelector, useDispatch } from 'react-redux'
import { addNote , getAllNotes, fetchNotes} from '../app/features/notes/notesSlice'
import { useGetNotesQuery } from '../app/features/api/apiSlice'
import { NotesContext } from '../App'


const NotesList = ({
	handleAddNote,
	deleteNote,
  updateNote
}) => {

  const { notes } = useContext(NotesContext)
  // const dispatch = useDispatch()

  // const notesRedux = useSelector(getAllNotes)
  // useEffect(() => {
    
  //   dispatch(fetchNotes())
  // }, [dispatch])

  // console.log('notesRedux', notesRedux)
  // const { data, isFetching } = useGetNotesQuery()
  // console.log('notesRedux-fromfetch', data)

  return (
    <>
      <div className='grid-notes'>
        <AddNote handleAddNote={handleAddNote}> </AddNote>
        {notes?.map((note, idx) => <div className='grid-note' key={idx}>
          <Note
            deleteNote={deleteNote}
            updateNote={updateNote}
            id={note.id}
            note={note} /> 
        </div>
        )}

      </div>

    </>
  )
}

export default NotesList