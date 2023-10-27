import React from "react";
import "./Book.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Book(props) {
  const history = useNavigate();
  const { _id, name, author, description, price, image } = props.book;

  const deleteHandler = async () => {
    await axios
      .delete(`http://localhost:5000/books/${_id}`)
      .then((res) => res.data)
      .then(() => history("/home"));
  };
  return (
    <div className="books">
      <div className="container">
        <div className="card">
          <img src={image} className="img-top" alt={name} />
          <div className="body">
            <div className="sub-body">
              <h5 className="name">{name}</h5>
              <div className="prc">
                <p className="author">{author}</p>
                <h6 className="price">Rs:{price}/-</h6>
              </div>
              <p className="text">{description}</p>
            </div>
            <div className="btns">
              <a href={`/books/${_id}`} className="btn btn-primary">
                Update
              </a>{" "}
              <a href="/" onClick={deleteHandler} className="btn btn-primary">
                Delete
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;
