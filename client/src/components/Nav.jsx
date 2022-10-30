import React from "react";
import {Link} from "react-router-dom";

function Nav() {
  return (

    <div className="me1">
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
          <li class="nav-item active">
            <Link class="nav-link" to="/">
              <strong>Home</strong>
            </Link>
          </li>
            <p class="nav-link disabled">/</p>
            <li class="nav-item active">
              <Link class="nav-link" to="/Insert">
                <strong>Add</strong>
              </Link>
            </li>

            <p class="nav-link disabled">/</p>
            <li class="nav-item active">
              <Link class="nav-link" to="/About">
                <strong>About Us</strong>
                <span class="sr-only">(current)</span>
              </Link>
            </li>
            <p class="nav-link disabled">/</p>
            <li class="nav-item active">
              <Link class="nav-link" to="/Contact">
                <strong>Contact Us</strong>
                <span class="sr-only">(current)</span>
              </Link>
            </li>


          </ul>
        </div>
        <form action="/login">
        <button type="submit" class="btn btn-outline-danger">Login Out</button>
        </form>
      </nav>


    </div>
  );
}

export default Nav;
