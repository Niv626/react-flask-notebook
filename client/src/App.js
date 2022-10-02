import React, { createContext, useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthProvider';



import Dashboard from './components/Dashboard'
import Login from './components/Login';
import Register from './components/Register';


function App() {

  return (
    <AuthProvider>

    <Routes>
      <Route exact path="/" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/dashboard" element={<Dashboard/>} />

    </Routes>
    </AuthProvider>

  )
}

export default App

