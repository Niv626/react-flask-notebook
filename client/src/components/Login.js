import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";
import { Link,Navigate  } from "react-router-dom";
import api from '../api/notes'
import { AppContext } from "../App";
import AuthContext from "../context/AuthProvider";

import "./login.css";

function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [logged_in, setLoggedIn] = useState({})
  const { auth, setAuth } = useContext(AppContext)
  console.log('first', auth)

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    // Find user login info
    // const userData = database.find((user) => user.username === uname.value);
    const userData = async () => {
        
          api.post(`/login`,JSON.stringify({"mail": document.forms[0][0].value}))
          .then((res) => {
    // Compare user info
    setLoggedIn(res)
    console.log('res', res)
    console.log('logged_in.data.session', res?.data?.session?.session)
    if (res?.data?.session?.session?.logged_in) {
      if (res.data.session?.session.user.password !==document.forms[0][1].value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setAuth(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
           }
            )
          .catch((e)=> console.log('e', e))
        

      }
      userData()



  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label><b>Username</b> </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label><b>Password</b> </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div  className="title"><b>Sign In</b></div>
        <h3 style={{ paddingBottom: 5}}>Not registered yet? <Link to="/register">Sign Up</Link></h3>
        {auth ? <Navigate  to="/dashboard"></Navigate > : renderForm}
      </div>
    </div>
  );
}

export default Login;