import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Dashboard
      </a>
      <a className="navbar-brand" href="/">
        My Goals
      </a>
      <a className="navbar-brand" href="/">
        My Journal
      </a>
      <a className="navbar-brand" href="/">
        All Resources
      </a>
      <p>Welcome User</p>
    </nav>
  );
}

export default Nav;
