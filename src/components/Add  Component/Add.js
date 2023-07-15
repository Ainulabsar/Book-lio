import React, { useState } from "react";
import "./Add.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Add = () => {
  const history = useNavigate();

  const [inputs, setInputs] = useState({
    name: "",
    author: "",
    description: "",
    price: "",
    image: "",
  });

  const sendRequest = async () => {
    await axios
      .post("http://localhost:5000/books", {
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
    console.log(inputs);
    sendRequest().then(() => history("/"));
  };

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    // console.log(e.target.name, "value", e.target.value);
  };

  // const handleChange = (e) => {
  //   setInputs((prevState) => ({
  //     ...prevState,
  //     [e.target.name]: e.target.value,
  //   }));
  // };

  return (
    <div className="container">
      <h3>Add Book Detail</h3>
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
        {/* <div className="mb-3">
          <label>Add Image</label> <br />
          <input
            type="file"
            // accept=".png, .jpg, .jpeg"
            name="image"
            className="form-label"
            onChange={handleChange}
            value={inputs.image}
          />
        </div> */}

        <button type="submit" className="btn btn-primary">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default Add;
