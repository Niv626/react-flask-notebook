import React from 'react'
import Note from './Note'
import './notes-list.css'
import { AddNote } from './AddNote'



const NotesList = ({
  notes,
	handleAddNote,
	deleteNote,
  updateNote
}) => {

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