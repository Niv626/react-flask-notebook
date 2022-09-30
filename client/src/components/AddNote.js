import React, {  useState } from 'react'
import api from '../api/notes'
import './add-note.css'
import './notes-list.css'
import './note.css'
import { v1 as uuid } from 'uuid';
import { Button, Modal, Input } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import AddEditNoteModal from './AddEditNoteModal'
// import "antd/dist/antd.css";

const { TextArea } = Input;


export const AddNote = ({handleAddNote}) => {

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
        handleNote={handleAddNote}
        title="Add New Note"
        route="/add-note"
        ></AddEditNoteModal>
      {/* <Modal
        title="Add New Note"
        open={isModalOpen}
        onOk={saveClick}
        onCancel={handleCancel}>

      <Input showCount maxLength={20} onChange={handleTitleChange} value={noteTitle} placeholder='title..'/>
      <br />
      <br />
      <TextArea showCount maxLength={100} onChange={handleTextChange} value={noteText} placeholder='add text..'/>
       </Modal> */}
      </div>
    </div>
  )
}


// import { Button, Modal } from 'antd';
// import React, { useState } from 'react';

// const App: React.FC = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const showModal = () => {
//     setIsModalOpen(true);
//   };

//   const handleOk = () => {
//     setIsModalOpen(false);
//   };

//   const handleCancel = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <>
//       <Button type="primary" onClick={showModal}>
//         Open Modal
//       </Button>
//       <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
//         <p>Some contents...</p>
//         <p>Some contents...</p>
//         <p>Some contents...</p>
//       </Modal>
//     </>
//   );
// };

// export default App;