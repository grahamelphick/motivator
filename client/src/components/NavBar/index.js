import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import "react-bootstrap"

function Nav() {
  return (
    <nav class="navbar navbar-expand-md navbar-light bg-light">
      <div class="container-fluid">
      <div class="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/dashboard"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/goals"
              className={window.location.pathname === "/goals" ? "nav-link active" : "nav-link"}
            >
              My Goals
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/resources"
              className={window.location.pathname === "/resources" ? "nav-link active" : "nav-link"}
            >
              My Resources
            </Link>
          </li>
        </ul>
      </div>
      <div class="mx-auto order-0">
        <a class="navbar-brand mx-auto" href="/">
          Nudge to Success
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target=".dual-collapse2"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">
              Welcome User
            </a>
          </li>
        </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
