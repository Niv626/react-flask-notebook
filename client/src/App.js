import React, { createContext, useContext, useEffect, useState } from 'react'
import { Routes, Route, Navigate, Link, Outlet } from 'react-router-dom'
import AuthContext, { AuthProvider } from './context/AuthProvider';
import Dashboard from './components/Dashboard'
import Login from './components/Login';
import Register from './components/Register';

export const AppContext = createContext({
  auth: false,
  setAuth: () => {}
});

const ProtectedRoute = ({ auth, redirectPath = '/dashboard', children }) => {
  if (!auth) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};


function App() {
  const [auth, setAuth] = useState(AppContext)
  const appState = { auth, setAuth }

  console.log('auth', auth)
  return (
    <AppContext.Provider value={appState}>
    <Routes>
      {/* <Route exact path="/" element={<Login/>} /> */}
      <Route path="/register" element={<Register/>} />
        <Route exact path="/" element={auth ? <Dashboard/>: <Login/>} />
      {/* {auth ? <Route path="/dashboard" element={<Dashboard/>} /> :
       <><Route /><Link to={"/"}></Link></>} */}

    </Routes>
    </AppContext.Provider>

  )
}

export default App

