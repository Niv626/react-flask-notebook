import React, { useContext } from 'react'
import './note.css'
import { MdDeleteForever } from 'react-icons/md';
import EditNote from './EditNote';
import api from '../api/notes'
import { NotesContext } from './Dashboard';

const Note = ({ note, id }) => {
  const { notes, setNotes } = useContext(NotesContext)

  const deleteNote = async (id) => {
    try {
      await api.delete(`/delete-note/${id}` )
      const newNotes = notes.filter((note) => note.id !== id)
      setNotes(newNotes)
    }
    catch (e) {
      console.log(`Error: ${e.message}`)
    }
  }

  return (
    <>
    <div className="note" >
        <h1 >{note.title}</h1>
        <h3>{note.text}</h3>

        <div className="note-footer">
            <small>{note?.date}</small>
            <div className="delete-note" style={{ float: 'right'}}>
              <MdDeleteForever
				        onClick={() => deleteNote(id)}
					      className='delete-icon'
					      size='1.3em'
				      />
            <div className='update-note' style={{ float: 'left', paddingRight: 10 }}>
              <EditNote noteId={id}></EditNote>
            </div>  
        </div>
        </div>

    </div>
    </>
  )
}

export default Note