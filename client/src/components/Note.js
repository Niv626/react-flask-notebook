import React from 'react'
import './note.css'
import { Button } from 'antd';
import { MdDeleteForever } from 'react-icons/md';
import { EditOutlined } from '@ant-design/icons';
import EditNote from './EditNote';


const Note = ({ note, id, deleteNote, updateNote }) => {



  return (
    <>
    {console.log('note', note)}
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
              <EditNote updateNote={updateNote} noteId={id}></EditNote>
              {/* <EditOutlined onClick={() => updateNote(id)}/> */}
            </div>  
        </div>
        </div>

    </div>
    </>
  )
}

export default Note