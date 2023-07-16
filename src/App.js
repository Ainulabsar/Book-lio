import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Home from "./components/Home";
import Add from "./components/Add  Component/Add";
import BookDetail from "./components/BookDetail";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Add" element={<Add />}></Route>
        <Route path="/books/:id" element={<BookDetail />}></Route>
      </Routes>
    </>
  );
}

export default App;
