import React from "react";

function Header({ length }){

  return (
    <nav className="navbar navbar-expand-lg navbar-expand-sm navbar-expand-md  navbar-light bg-light ">
      <div
        className="collapse navbar-collapse position-relative"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <button className="btn btn-danger">STORE For EveryOne</button>
          </li>
        </ul>

        <div className="position-absolute top-0 end-0">
          <button
            className="btn btn-danger"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight-1"
            aria-controls="offcanvasRight"
          >
            Cart({length})
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
