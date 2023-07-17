import React, { useState, useEffect } from "react";
import axios from "axios";
import Book from "./Book";
import "./Book.css";
import { NavigationIcon } from "@mui/icons-material";
// import { Fab } from "@mui/icons-material";
import Fab from "@mui/material/Fab";

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
      <Fab variant="extended">
        <NavigationIcon sx={{ mr: 1 }} />
        Navigate
      </Fab>
    </>
  );
}

export default Home;
