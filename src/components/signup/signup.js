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
  const [Buyer, setBuyer] = useState();
  const [Seller, setSeller] = useState();

  async function submit(e) {
    console.log("signup successful");
    console.log(Seller);
    console.log(Buyer);
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:5000/signup", {
          email,
          password,
          name,
          Seller,
          Buyer,
        })
        .then((res) => {
          console.log(res.config.data);
          if (res.data === "exist") {
            alert("user already exits");
          } else if ((res.data = "notexist")) {
            if (Seller === "option1") {
              history("/home");
            } else if (Buyer === "option2") {
              history("/book");
              console.log("book");
            } else {
              alert("Please select your domain (Seller/Buyer)");
            }
            // history("/home", { state: { id: "name" } });
          }
        })
        .catch((e) => {
          alert("wrong details");
        });
      if (password === conpasssowrd) {
        console.log("password confirmed");
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
            if you Already Have an Account Please <strong>Login</strong> !
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
