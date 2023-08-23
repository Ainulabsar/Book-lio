import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Register() {
  const [iname, setName] = useState();
  const [iemail, setEmail] = useState();
  const [ipassword, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Botto Clikcked");
    await axios
      .post("http://localhost:5000/register", {
        iname,
        iemail,
        ipassword,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="registerMain">
      <div className="contain">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                User Name
              </label>
              <input
                type="text"
                value={iname}
                className="form-control"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>

            <input
              type="email"
              value={iemail}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Create Password
            </label>
            <input
              type="password"
              value={ipassword}
              className="form-control"
              id="exampleInputPassword1"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Register
          </button>
        </form>
        <div id="emailHelp" className="form-text">
          Already Have an Account Please Login
        </div>
        <Link to="./Login" type="submit" id="Lgn" className="btn btn-secondary">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Register;
