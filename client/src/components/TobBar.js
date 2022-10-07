import React, { useContext } from 'react'
import { AppContext } from '../App'
import AuthContext from '../context/AuthProvider'

const TobBar = () => {
  const { setAuth } = useContext(AppContext)

  return (
    <><div md={20} style={{ padding: 6, paddingLeft: 25, margin: 0 }}>
      <h1 style={{ float: "left" }}>NoteMe</h1>
    </div>
        <div >
        <h3 onClick={ () => setAuth(false) } style={{ float: "right" }}>Sign out</h3>

      </div></>
   )
}

export default TobBar