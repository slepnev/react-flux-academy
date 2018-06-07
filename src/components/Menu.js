import React, {Component} from 'react';
import {NavLink, Router} from "react-router-dom";

class Menu extends Component {
  render() {
    const {location} = this.props.history;
    const contactsClass = location.pathname.match(/^\/contacts/) ? "text-primary" : "";
    const formClass = location.pathname.match(/^\/form/) ? "text-primary" : "";
    const historyClass = location.pathname.match(/^\/history/) ? "text-primary" : "";

    return (
      <Router history={this.props.history}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink exact className="navbar-brand" to={`/`}>React</NavLink>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink exact className="nav-link" activeClassName="text-dark" to={`/`}>Home</NavLink>
              </li>
              <li className={"nav-item " + contactsClass}>
                <NavLink className="nav-link" activeClassName="text-dark" to={`/contacts`}>Contacts</NavLink>
              </li>
              <li className={"nav-item " + formClass}>
                <NavLink className="nav-link" activeClassName="text-dark" to={`/form`}>Form</NavLink>
              </li>
              <li className={"nav-item " + historyClass}>
                <NavLink className="nav-link" activeClassName="text-dark" to={`/archives/history`}>Archive</NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="{null}">Disabled</a>
              </li>
            </ul>
          </div>
        </nav>
      </Router>
    );
  }
}

export default Menu;
