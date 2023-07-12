import React, { useState, useEffect } from "react";
import axios from "axios";
import Book from "./Book";
import "./Book.css";

const URL = "http://localhost:5000/books";
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
function Home() {
  const [books, setBooks] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, []);
  console.log(books);

  return (
    <>
      <div className="container">
        <ul>
          <div className="mainCard">
            {books &&
              books.map((book, i) => (
                <div key={i}>
                  <Book book={book} />
                </div>
              ))}
          </div>
        </ul>
      </div>
      <div id="AddBook">
        <a href="/Add" className="btn btn-primary">
          Add Book
        </a>
      </div>
    </>
  );
}

export default Home;
