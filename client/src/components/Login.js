import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link,Navigate  } from "react-router-dom";
import api from '../api/notes'

import "./login.css";

function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    // const userData = database.find((user) => user.username === uname.value);
    const userData = async () => {
        try {
          api.post(`/login`,  JSON.stringify({"mail": uname}),{})
        }
        catch (e) {
          console.error( e)
        }
      }
      userData()

      console.log('userData', userData)

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
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
        <div className="title"><b>Sign In</b></div>
        <h3 style={{ paddingBottom: 5}}>Not registered yet? <Link to="/">Sign Up</Link></h3>
        {isSubmitted ? <Navigate  to="/dashboard"></Navigate > : renderForm}
      </div>
    </div>
  );
}

export default Login;