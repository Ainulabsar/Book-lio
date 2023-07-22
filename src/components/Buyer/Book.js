import React, { useState, useEffect } from "react";
import axios from "axios";
import BuyerBook from "./BuyerBook";
import Bill from "./Bill";
const URL = "http://localhost:5000/books";
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

function Book() {
  const [books, setBooks] = useState();

  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, []);
  return (
    <div>
      <div>
        <div>
          <ul>
            <div className="mainCard">
              {books &&
                books.map((book, i) => (
                  <div key={i}>
                    <BuyerBook book={book} />
                    <Bill book={book} />
                  </div>
                ))}
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Book;
