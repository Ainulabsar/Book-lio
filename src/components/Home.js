import React, { useState, useEffect } from "react";
import axios from "axios";
import Book from "./Book";
import "./Book.css";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

const URL = "http://localhost:5000/books";
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

function Home() {
  const [books, setBooks] = useState();

  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, []);

  return (
    <>
      <div>
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

      {/* Floating button */}
      <div style={{ position: "fixed", bottom: "20px", right: "20px" }}>
        <Fab
          variant="extended"
          color="primary"
          aria-label="Add"
          className="AddBook"
          href="./Add"
        >
          <AddIcon />
          Add Book
        </Fab>
      </div>
    </>
  );
}

export default Home;
