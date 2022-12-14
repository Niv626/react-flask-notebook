import React, { useContext, useRef, useState } from "react"
import { Form, Button, Alert } from "react-bootstrap"
// import { useAuth } from "../contexts/AuthContext"
import { Link, useNavigate  } from "react-router-dom"
import {  Card  } from 'antd'
import api from '../api/notes'
import './register.css'
import { AppContext } from "../App"


const Register = () => {
        const { auth, setAuth }=useContext(AppContext)
        const emailRef = useRef()
        const passwordRef = useRef()
        const passwordConfirmRef = useRef()
        const [error, setError] = useState("")
        const [loading, setLoading] = useState(false)
        const history = useNavigate ()
      
        async function handleSubmit(e) {
          e.preventDefault()
      
          if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Passwords do not match")
          }
      
          try {
            setError("")
            setLoading(true)
            await api.post(`/register`, JSON.stringify({"email":emailRef.current.value, "password": passwordRef.current.value}))
            .then((res) => {
                setAuth(true)
                localStorage.setItem('user', JSON.stringify(res.data.user));
            }
            )
          } catch {
            setError("Failed to create an account")
          }
      
          setLoading(false)
        }
      
    return (
      <>
      <div className="register">
        <div className="ml-4" style={{ width: "395px",padding: 100, margin: "100 auto", backgroundColor: 'white'}}>
          {/* <Card.Body> */}
            <h2 className="text-center mb-4" ><b>Sign Up</b></h2>
            {error && <Alert variant="danger">{error}</Alert>}
            Already have an account? <Link to="/">Log In</Link>
            <Form style={{ marginTop: 15}} onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>
              <Form.Group id="password-confirm">
                <Form.Label>Password Confirmation</Form.Label>
                <Form.Control type="password" ref={passwordConfirmRef} required />
              </Form.Group>
              <div className="button-container">
              <button disabled={loading} className="w-100" type="submit">
                Sign Up
              </button>
              </div>
            </Form>
          {/* </Card.Body> */}
          <div className="w-100 text-center mt-2">
        </div>
        </div>
        </div>
      </>
    )  
}

export default Register


