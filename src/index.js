import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import Users from "./Users";
import Contact from "./Contact";
import "./index.css";
const routing = (
  <Router>
    <div>
      <ul className="menu">
        <li>
          <Link className="links" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="links" to="/users">
            Users
          </Link>
        </li>
        <li>
          <Link className="links" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
      <Route exact path="/" component={App} />
      <Route path="/users" component={Users} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));
