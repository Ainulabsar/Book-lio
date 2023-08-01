import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BuyerBook = (props) => {
  const { _id, name, author, description, price, image } = props.book;
  const history = useNavigate();

  const handleBill = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/books/${_id}`);
      const data = response.data;
      console.log(data); // This will display the API data in the console

      // Pass the data as state while navigating to the Bill component
      history("/Bill", { state: { bookData: data } }); // Correct way to pass state
    } catch (error) {
      console.error("Error fetching book data:", error);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="card">
          <img src={image} className="img-top" alt={name} />
          <div className="body">
            <div className="sub-body">
              <h5 className="name">{name}</h5>
              <div className="prc">
                <p className="author">{author}</p>
                <h6 className="price">Rs: {price}</h6>
              </div>
              <p className="text">{description}</p>
            </div>
            <div class="d-grid gap-2">
              <button onClick={handleBill} class="btn btn-primary">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerBook;
