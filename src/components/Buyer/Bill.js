import React from "react";
import "./Book.css";
import { useLocation } from "react-router-dom";

function Bill() {
  const location = useLocation();
  const bookData = location.state ? location.state.bookData : null;

  console.log("Location state:", location.state); // Check the location.state object
  console.log("bookData:", bookData);
  const handleSave = () => {
    console.log("Saved");
    window.print();
  };
  //   const { _id, name, author, description, price, image } = props.book;
  const today = new Date();
  const formattedDate = `${today.getDate()}/${
    today.getMonth() + 1
  }/${today.getFullYear()} Time : ${today.getHours()}:${today.getMinutes()}`;
  console.log(today);
  return (
    <>
      <div>
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
            {bookData && (
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
                      <td>{bookData.book.name}</td>
                      {/* <td>{bookData.name}</td> */}
                      <td>1</td>
                      <td>{bookData.book.price}</td>
                    </tr>
                  </tbody>
                </table>

                <p>
                  Total Amount: <strong>{bookData.book.price} </strong>
                </p>
              </div>
            )}

            <div>
              <button
                type="button"
                class="btn btn-primary "
                onClick={handleSave}
              >
                Download Bill
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bill;
