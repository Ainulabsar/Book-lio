import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";
import axios from "axios";
function Signup() {
  const history = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPasswword] = useState();
  const [conpasssowrd, setConpasswword] = useState();
  const [name, setName] = useState();

  async function submit(e) {
    console.log(password);
    console.log("signup successful");
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:5000/signup", {
          email,
          password,
          name,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data === "exist") {
            alert("user already exits");
          } else if ((res.data = "notexist")) {
            history("/home");
          }
        })
        .catch((e) => {
          alert("wrong details");
        });
      if (password == conpasssowrd) {
        console.log("password confirmed");
        history("/home");
      } else {
        console.log("rewrite password");
        alert("password not matched");
        history("/signup");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="login">
      <div>
        <h3 className="sh">Sign-up</h3>
        <form action="post">
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              User Name
            </label>
            <input
              type="text"
              className="form-control"
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Enter User Name"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              placeholder="Enter Email Address"
              className="form-control"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              onChange={(e) => {
                setPasswword(e.target.value);
              }}
              placeholder="Enter Password"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Confim Password
            </label>
            <input
              type="password"
              className="form-control"
              onChange={(e) => {
                setConpasswword(e.target.value);
              }}
              placeholder="Enter Password"
              id="exampleInputPassword1"
            />
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary" onClick={submit}>
              Submit
            </button>
          </div>
          <br />
          <div id="emailHelp" className="form-text">
            if Already had an account please login
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">
              <Link to={"/"} className="log">
                Login
              </Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
