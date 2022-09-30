import { EditOutlined } from '@ant-design/icons'
import React, { useState } from 'react'
import AddEditNoteModal from './AddEditNoteModal';

function EditNote({updateNote, noteId}) {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
  return (
    <><EditOutlined onClick={showModal} />
        <AddEditNoteModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          handleNote={updateNote}
          title="Edit Note"
          id={noteId}
          route={`/edit-note/${noteId}`}
        >
        </AddEditNoteModal>
        </>

    )
}

export default EditNote