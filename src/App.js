import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Home from "./components/Home";
import Add from "./components/Add  Component/Add";
import BookDetail from "./components/BookDetail";
import { Routes, Route } from "react-router-dom";
import Book from "./components/Buyer/Book";
import Bill from "./components/Buyer/Bill";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Add" element={<Add />}></Route>
        <Route path="/books/:id" element={<BookDetail />}></Route>
        <Route path="/Book" element={<Book />}></Route>
        <Route path="/Bill" element={<Bill />}></Route>
      </Routes>
    </>
  );
}
export default App;
