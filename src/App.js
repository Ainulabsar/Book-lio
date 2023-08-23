import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Home from "./components/Home";
import Add from "./components/Add  Component/Add";
import BookDetail from "./components/BookDetail";
import { Routes, Route } from "react-router-dom";
import Book from "./components/Buyer/Book";
import Bill from "./components/Buyer/Bill";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";

// function App() {
//   return (
//     <>
//       <Nav />
//       <Register />

//       <Routes>
//         {/* <Route path="/Signup" element={<Register />}></Route> */}
//         <Route path="/" element={<Home />}></Route>
//         <Route path="/About" element={<About />}></Route>
//         <Route path="/Add" element={<Add />}></Route>
//         <Route path="/books/:id" element={<BookDetail />}></Route>
//         <Route path="/Book" element={<Book />}></Route>
//         <Route path="/Bill" element={<Bill />}></Route>
//       </Routes>
//     </>
//   );
// }

function App() {
  return (
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/" element={<MainWithNav />} />
    </Routes>
  );
}

function MainWithNav() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/add" element={<Add />} />
        <Route path="/books/:id" element={<BookDetail />} />
        <Route path="/book" element={<Book />} />
        <Route path="/bill" element={<Bill />} />
      </Routes>
    </>
  );
}
export default App;
