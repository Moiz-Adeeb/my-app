import "./App.css";
import { Header } from "./MyComponents/Header.js";
import { Todos } from "./MyComponents/Todos.js";
import { Footer } from "./MyComponents/Footer.js";
import { AddTodo } from "./MyComponents/AddTodo.js";
import { About } from "./MyComponents/About.js";
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // Link,
  Routes,
} from "react-router-dom";

function App() {
  let initTodo = [];
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("I am Inevitable", todo);
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);
    // Will not work in react

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log("Adding Todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  const [todos, setTodos] = useState([initTodo]);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Router basename="/my-app">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <Header title="My Todos List" searchBar={true} />
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
                <Footer />
              </>
            }
          ></Route>
          <Route
            exact
            path="/about"
            element={
              <>
                <Header title="My Todos List" searchBar={false} />
                <About />
                <Footer />
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
