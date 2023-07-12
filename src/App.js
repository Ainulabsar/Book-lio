import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Home from "./components/Home";
import Add from "./components/Add  Component/Add";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Add" element={<Add />}></Route>
      </Routes>
    </>
  );
}

export default App;
