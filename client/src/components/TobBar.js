import { Button } from 'antd'
import React, { useContext } from 'react'
import { AppContext } from '../App'
import AuthContext from '../context/AuthProvider'
import api from '../api/notes'


const TobBar = () => {
  const { setAuth } = useContext(AppContext)
  const handleLogOut = () => {
    setAuth(false)
    localStorage.clear();
    api.get('/sign-out')
  }

  return (
    <><div md={20} style={{ padding: 6, paddingLeft: 25, margin: 0 }}>
      <h1 style={{ float: "left" }}>NoteMe</h1>
    </div>
        <div className='pr-2 site-button-ghost-wrapper'>
        <Button 
          className=''
          type="primary"
          onClick={handleLogOut}
          style={{ float: "right", marginRight: 15, color: 'black', borderRadius: 50 }}>
            Sign out
        </Button>

      </div></>
   )
}

export default TobBar