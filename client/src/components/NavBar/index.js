import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Dashboard
      </a>
      <a className="navbar-brand" href="/goals">
        My Goals
      </a>
      <a className="navbar-brand" href="/journal">
        My Journal
      </a>
      <a className="navbar-brand" href="/resources">
        All Resources
      </a>
      <p>Welcome User</p>
    </nav>
  );
}

export default Nav;
