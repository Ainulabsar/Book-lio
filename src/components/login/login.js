import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import axios from "axios";

function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPasswword] = useState();
  const [Buyer, setBuyer] = useState();
  const [Seller, setSeller] = useState();

  async function submit(e) {
    console.log("login successful");
    console.log(Seller + "selected");
    console.log(Buyer);
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/", {
        email,
        password,
      });
      console.log(res);
      if (res.data === "exist") {
        if (Seller === "option1") {
          history("/home");
        } else if (Buyer === "option2") {
          history("/book");
          console.log("book");
        } else {
          alert("Please select your domain (Seller/Buyer)");
        }
      } else if (res.data === "notexist") {
        alert("User has not signed up");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while logging in");
    }
  }
  return (
    <div className="login">
      <h3>Login</h3>
      <form action="post">
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
        {/* <div className="dropdown">
          <button
            id="btn"
            className="btn btn-primary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Please Select Your Domain
          </button>
          <ul className="dropdown-menu">

            <li>
              <a className="dropdown-item">
                Seller
              </a>
            </li>
            <li>
              <a className="dropdown-item" >
                Buyer
              </a>
            </li>
            <li>
              <a className="dropdown-item">
                Admin
              </a>
            </li>
          </ul>
        </div> */}
        <label>Please Select Your Domain</label>
        <br />
        <div className="form-check form-check-inline" id="radiobtn">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="option1"
            onChange={(e) => {
              setSeller(e.target.value);
            }}
          />
          <label className="form-check-label" for="inlineRadio1">
            Seller
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio2"
            value="option2"
            onChange={(e) => {
              setBuyer(e.target.value);
            }}
          />
          <label className="form-check-label" for="inlineRadio2">
            Buyer
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio3"
            value="option3"
            disabled
          />
          <label className="form-check-label" for="inlineRadio3">
            Admin (disabled)
          </label>
        </div>
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-primary" onClick={submit}>
            Submit
          </button>
        </div>
        <br />
        <div id="emailHelp" className="form-text">
          if you are not a User Please Register !
        </div>
        <div className="d-grid gap-2">
          <button type="button" className="btn btn-primary">
            <Link to={"/signup"} className="log">
              Signup
            </Link>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
