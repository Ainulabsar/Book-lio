import React from "react";
import "./Book.css";

function Book(props) {
  const { _id, name, author, description, price, image } = props.book;

  return (
    <div className="books">
      <div className="container">
        <div className="card">
          <img src={image} className="img-top" alt={name} />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <h6>{author}</h6>
            <p className="card-text">{description}</p>
            <div className="btns">
              <a href={`/books/${_id}`} className="btn btn-primary">
                Update
              </a>{" "}
              <a href="/" className="btn btn-primary">
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
