import React, { useContext, useEffect, useState } from 'react'
import Note from './Note'
import './notes-list.css'
import { AddNote } from './AddNote'
import { NotesContext } from './Dashboard'
// import {  addNote } from './app/features/notes/notesSlice'


const NotesList = ({
	handleAddNote,
	deleteNote,
  updateNote,
  notes
}) => {

  console.log('notes in note list', notes)
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