import React from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./Book.css";

import { useState } from "react";
const BookDetail = () => {
  const [inputs, setInputs] = useState({});

  const id = useParams().id;
  console.log(id);
  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`http://localhost:5000/books/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.book));
    };
    fetchHandler();
  }, [id]);

  const history = useNavigate();

  const sendRequest = async () => {
    await axios
      .put(`http://localhost:5000/books/${id}`, {
        name: String(inputs.name),
        author: String(inputs.author),
        description: String(inputs.description),
        price: Number(inputs.price),
        image: String(inputs.image),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/home"));
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div className="container">
      <div>
        <h3>Update Book</h3>
      </div>
      {inputs && (
        <form className="form" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Book Name</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={inputs.name}
              className="form-control"
              id="exampleInputEmail1"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Author Name</label>
            <input
              name="author"
              onChange={handleChange}
              value={inputs.author}
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <input
              name="description"
              value={inputs.description}
              onChange={handleChange}
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Price</label>
            <input
              name="price"
              value={inputs.price}
              onChange={handleChange}
              type="number"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Image Url</label>
            <input
              name="image"
              value={inputs.image}
              onChange={handleChange}
              type="text"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Update Book
          </button>
        </form>
      )}
    </div>
  );
};

export default BookDetail;
