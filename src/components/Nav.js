import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
// import useState from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import book from "./Buyer/book";
import "./Nav.css";
function Nav() {
  // const [searchTerm, setSearchTerm] = useState();
  // const handleSearch = (e) => {
  //   const term = e.target.value;
  //   console.log(term);
  //   setSearchTerm(term);
  // };

  const location = useLocation();
  const history = useNavigate();
  console.log(location.state);
  function logbtn() {
    history("./");
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" id="navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            BookLio
            {/* <h1>Hello {location.state.id} </h1> */}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/About">
                  About
                </a>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search for books..."
                // value={searchTerm}
                // onChange={handleSearch}
              />
              <button
                className="btn btn-outline-success"
                type="submit"
                // onClick={handleSearch}
              >
                Search
              </button>
  </form> */}

            {/* <div>
              <button type="button" class="btn btn-primary">
                Buyer
              </button>
            </div> */}
            <div className="dropdown">
              <button
                type="button"
                className="btn btn-primary dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                <MenuIcon />
              </button>

              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/Book">
                    Buyer
                  </a>
                </li>
                <li>
                  <button
                    type="button"
                    class="btn btn-secondary"
                    onClick={logbtn}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
