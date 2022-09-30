import React, { useEffect, useState } from 'react'
import NotesList from './components/NotesList'
import SearchNotes from './components/SearchNotes'
import api from './api/notes'
import { Row, Col, Button } from 'antd'
import { DeleteOutlined } from '@ant-design/icons';




// import "antd/dist/antd.css";

function App() {

  const [notes, setNotes] = useState([{}])
  const [searchText, setSearchText] = useState('');
  



  useEffect(() => {
    // const fetchNotes = async () => {
    //   try {
    //     const res = await api.get('/notes')
    //     setNotes(res.data)
    //   }
    //   catch (e) {
    //     console.log('e', e)
    //   }
    // }
    // fetchNotes()
    
  }, [])

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

  const updateNote = ({ title, text, date, id }) => {    
      notes.forEach((note, index) => {
        if (note.id === id) {
          notes[index] =  {...notes[index], title, text, date }
        }
    }) 
    setNotes([...notes])


 }

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

  const deleteAllNotes = async() => {
    try {
      await api.delete(`/delete-all-notes` )
      setNotes([{}])
    }
    catch (e) {
      console.log(`Error: ${e.message}`)
    }
  }

  return (
      <>
      <Row style={{backgroundImage: "linear-gradient(to right, #adcef0, #e3e3e3 " , height: 57}}>
        <Col md={20} style={{ padding: 6,paddingLeft: 25, margin: 0 }}>
          <h1 >NoteMe</h1>
        </Col>
      
      </Row>
      <Row align='center'>
        <Col md={9} style={{ padding: 6,paddingLeft: 25}}>
          <SearchNotes handleSearchNote={setSearchText}></SearchNotes>
        </Col>
        <Col md={3}>
          <DeleteOutlined onClick={deleteAllNotes} style={{color: 'white', fontSize:40 , paddingLeft: 30, marginTop: 21  }}></DeleteOutlined>
        </Col>

      </Row>

    <Row style={{ padding: 12 }}>
      <NotesList notes={notes.filter((note) =>
						note.text?.toLowerCase().includes(searchText)
					)} handleAddNote={addNote} deleteNote={deleteNote} updateNote={updateNote} >

      </NotesList>

    </Row>
    </>
  )
}

export default App

