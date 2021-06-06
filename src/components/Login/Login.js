import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Login() {
  const [loginusername, setloginuser] = useState("");
  const [loginpassword, setloginpassword] = useState("");
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    const payload = {
      username: loginusername,
      password: loginpassword,
    };
    console.log(payload);
    axios({
      url: "/login",
      method: "POST",
      data: payload,
    }).then((res) => console.log(res), history.push("/"));
    reset();
  }

  function reset() {
    setloginuser("");
    setloginpassword("");
  }
  return (
    <div>
      <div className="container mt-5">
        <h1>Login</h1>

        <div className="row">
          <div className="col-sm-8">
            <div className="card">
              <div className="card-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label for="username">Username</label>
                    <input
                      type="text"
                      className="form-control"
                      name="loginusername"
                      value={loginusername}
                      onChange={(e) => setloginuser(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label for="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="loginpassword"
                      value={loginpassword}
                      onChange={(e) => setloginpassword(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="btn btn-dark">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
