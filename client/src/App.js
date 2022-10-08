import React, { createContext, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import Login from './components/Login';
import Register from './components/Register';

export const AppContext = createContext({
  auth: false,
  setAuth: () => {}
});

function App() {
  const [auth, setAuth] = useState(AppContext)
  const appState = { auth, setAuth }

  return (
    <AppContext.Provider value={appState}>
    <Routes>
      <Route path="/register" element={auth && JSON.parse(localStorage.getItem('user'))  ? <Dashboard/> : <Register/> } />
      <Route exact path="/" element={auth && JSON.parse(localStorage.getItem('user')) ? <Dashboard/>: <Login/>} />
    </Routes>
    </AppContext.Provider>

  )
}

export default App

