import { EditOutlined } from "@ant-design/icons";
import React, { useContext, useState } from "react";
import { NotesContext } from "../App";
import AddEditNoteModal from "./AddEditNoteModal";

function EditNote({ noteId }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { notes, setNotes } = useContext(NotesContext)

  const updateNote = ({ title, text, date, id }) => {    
    notes.forEach((note, index) => {
      if (note.id === id) {
        notes[index] =  {...notes[index], title, text, date }
      }
  }) 
  setNotes([...notes])
}

  const showModal = () => {
    setIsModalOpen(true);
  };
  return (
    <>
      {" "}
      <EditOutlined onClick={showModal} />
      <AddEditNoteModal isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        handleNote={updateNote}
        title="Edit Note"
        id={noteId}
        route={`/edit-note/${noteId}`}
      ></AddEditNoteModal>
    </>
  );
}

export default EditNote;
