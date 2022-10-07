import React, { createContext, useEffect, useState } from 'react'
import NotesList from '../components/NotesList'
import SearchNotes from '../components/SearchNotes'
import api from '../api/notes'
import { Row, Col, Button } from 'antd'
import { DeleteOutlined } from '@ant-design/icons';
import TobBar from '../components/TobBar'


export const NotesContext = createContext({
  notes: [{}],
  setNotes: () => {}
});


function Dashboard() {
  const [notes, setNotes] = useState([{}])
  const notesState = { notes, setNotes }
  const [searchText, setSearchText] = useState('');
//   const [isSubmitted, setIsSubmitted] = useState(false);

  
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await api.get('/notes')
        setNotes(res.data)
      }
      catch (e) {
        console.log('e', e)
      }
    }
    fetchNotes()
    
  }, [])

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
      <NotesContext.Provider value={notesState}>
        <Row style={{backgroundImage: "linear-gradient(to right, #adcef0, #e3e3e3 " , height: 57, display:'block'}}>
          <TobBar />
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
				  )}/>
        </Row>
    </NotesContext.Provider>
  )
}

export default Dashboard

