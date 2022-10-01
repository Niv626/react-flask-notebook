import React, {  useContext, useState } from 'react'
import './add-note.css'
import './notes-list.css'
import './note.css'
import { v1 as uuid } from 'uuid';
import { PlusCircleOutlined } from '@ant-design/icons';
import AddEditNoteModal from './AddEditNoteModal'
import { NotesContext } from '../App';

export const AddNote = () => {

  const { notes, setNotes } = useContext(NotesContext)

  const addNote = ({ title, text, date, id }) => {
    const newNote = {
      title,
      text,
      date,
      id
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  
  return (
    <div className='add-note grid-note'>
      <div className='note'  style={{backgroundColor: 'mediumseagreen'}}>
      <PlusCircleOutlined onClick={showModal} style={{paddingTop: '8%', fontSize: 92}}/>
      <h1 style={{ textAlign: 'center' }}>Add New Note</h1>

      <AddEditNoteModal isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        handleNote={addNote}
        title="Add New Note"
        route="/add-note"
        ></AddEditNoteModal>
      </div>
    </div>
  )
}
