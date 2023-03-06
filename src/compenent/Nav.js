import React from "react";
import "bootstrap/js/dist/collapse";
import "bootstrap/js/dist/dropdown";

function Nav({ Toggle }) {
  return (
    <nav className="navbar  navbar-expand-sm navbar-white  bg-white px-3 ">
      <i className="navbar-brand bi bi-justify-left fs-4" onClick={Toggle}></i>
      <div className="container-fluid">
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-justify"></i>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
