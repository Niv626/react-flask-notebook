import { Input, Modal } from 'antd'
import TextArea from 'antd/lib/input/TextArea';
import React, { useState } from 'react'
import { v1 as uuid } from 'uuid';
import api from '../api/notes'


function AddEditNoteModal({handleNote, title,isModalOpen, setIsModalOpen, route, id}) {
    const [noteTitle, setNoteTitle] = useState('')
    const [noteText, setNoteText] = useState('')

  const handleTextChange = (event) => {
    setNoteText(event.target.value)
  }

  const handleTitleChange = (event) => {
    setNoteTitle(event.target.value)
  }

  const saveClick = () => {
    const note = {
      title: noteTitle,
      text: noteText,
      date: new Date().toLocaleString('en-GB', { timeZone: 'UTC' }),
      id: id ?? uuid()
    }
    console.log('route', route)
    handleNote(note)
    const fetchNotes = async () => {
      try {
        api.post(route,  JSON.stringify(note),{
        })
      }
      catch (e) {
        console.error('faild to add new note', e)
      }
    }
    fetchNotes()
    setNoteText('')
    setNoteTitle('')
    setIsModalOpen(false);

  }


  const handleCancel = () => {
    setIsModalOpen(false);
  }

  return (
    <Modal
    title={title}
    open={isModalOpen}
    onOk={saveClick}
    onCancel={handleCancel}>

  <Input showCount maxLength={20} onChange={handleTitleChange} value={noteTitle} placeholder='title..'/>
  <br />
  <br />
  <TextArea showCount maxLength={100} onChange={handleTextChange} value={noteText} placeholder='add text..'/>
   </Modal>
  )
}

export default AddEditNoteModal