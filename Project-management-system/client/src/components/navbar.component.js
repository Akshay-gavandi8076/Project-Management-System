import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.component.css'

export default class NavbarPr extends Component {

  render() {
    return (
      <nav className="navbar my-nav navbar-expand-lg rounded">
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/list" className="nav-link">Current Projects List</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create New Project </Link>
          </li>
          <li className="navbar-item">
          <Link to="/team" className="nav-link">Create Team</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}