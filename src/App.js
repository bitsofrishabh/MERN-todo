import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateTodo from "./components/create-todo";
import EditTodo from "./components/edit-todo";
import TodoList from "./components/todo-list";
import logo from "./logo.svg";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://google.com">
              <img src={logo} width="30" height="30" alt="logo" />
            </a>
            <Link to="/" className="navbar-brand">
              MERN STACK TODO APP
            </Link>

            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/">Todos </Link>
              </li>
              <br />
              <li className="navbar-item">
                <Link to="/create">Create Todo</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={TodoList} />
          <Route path="/edit/:id" exact component={EditTodo} />
          <Route path="/create" exact component={CreateTodo} />
        </div>
      </Router>
    );
  }
}

export default App;
