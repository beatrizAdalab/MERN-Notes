import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Inbox } from '@material-ui/icons';


export default class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <Inbox className="mr-2 text-warning" />
            NotesApp
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">Notes</Link>
              </li>
              <li className="nav-item">
                <Link to="/create" className="nav-link">Create Note</Link>
              </li>
              <li className="nav-item">
                <Link to="/user" className="nav-link">Create User</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
};
