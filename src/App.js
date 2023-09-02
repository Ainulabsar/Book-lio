import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Home from "./components/Home";
import Add from "./components/Add  Component/Add";
import BookDetail from "./components/BookDetail";
import { Routes, Route } from "react-router-dom";
import Book from "./components/Buyer/Book";
import Bill from "./components/Buyer/Bill";
import Login from "./components/login/login";
import Signup from "./components/signup/signup";

function App() {
  return (
    <>
      <Nav />
      {/* <Login /> */}
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/Home" element={<Home />}></Route>
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
