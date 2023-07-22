import React from "react";
import "./Book.css";

const Bill = (props) => {
  const { name, price } = props.book;
  console.log(props.book);
  // const Date = new Date
  const today = new Date();
  const formattedDate = `${today.getDate()}/${
    today.getMonth() + 1
  }/${today.getFullYear()} Time : ${today.getHours()}:${today.getMinutes()}`;
  console.log(today);

  const handleSave = () => {
    console.log("Saved");
    window.print();
  };

  return (
    <>
      <div className="container">
        <div className="Bills">
          <div>
            <h5>Invoice Particular</h5>
          </div>
          <div className="head">
            <div>
              <h2>Booklio</h2>
              <p>Second Hand Book Selling Platform</p>
            </div>
            <div className="contact">
              <h6>Contact us</h6>
              <p>
                {" "}
                <strong>Email Id :</strong>
                booklio.support@gmaiil.com
              </p>
            </div>
          </div>
          <div className="Detail">
            <div>
              <p>
                Mr/Mrs: <strong> Ainul Absar</strong>
              </p>
            </div>
            <div className="bdetails">
              <p className="Bill">
                <strong>Bill No:</strong>
              </p>
              <p className="Date">
                <strong>Date: </strong>
                {formattedDate}
              </p>
            </div>
          </div>
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Sl.No</th>
                  <th scope="col" className="desc">
                    Description
                  </th>
                  <th scope="col" className="qty">
                    Quantity
                  </th>
                  <th scope="col">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>{name}</td>
                  <td>1</td>
                  <td>{price}</td>
                </tr>
              </tbody>
            </table>

            <p>
              <strong>Total Amount: </strong>
            </p>
          </div>
          <div>
            <button type="button" class="btn btn-primary " onClick={handleSave}>
              Download Bill
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bill;
