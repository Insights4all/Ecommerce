import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Register() {
  const [registerusername, setregisterusername] = useState("");
  const [password, setpassword] = useState("");

  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    const payload = {
      username: registerusername,
      password: password,
    };

    axios({
      url: "/register",
      method: "POST",
      data: payload,
    }).then((res) => console.log(res), history.push("/login"));

    reset();
  }

  function reset() {
    setregisterusername("");
    setpassword("");
  }

  return (
    <div>
      <div className="container mt-5">
        <h1>Register</h1>

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
                      name="registerusername"
                      value={registerusername}
                      onChange={(e) => setregisterusername(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label for="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      value={password}
                      onChange={(e) => setpassword(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="btn btn-dark">
                    Register
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

export default Register;
