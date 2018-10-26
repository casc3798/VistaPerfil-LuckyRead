import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className="divNavbar">
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="http://youtube.com">Navbar</a>
          <form className="form-inline">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </nav>

      </div>
    );
  }
}

export default Navbar;
