import './App.css';
import Header from './AppComponents/Header';
import { Todos } from './AppComponents/Todos';
import { Footer } from './AppComponents/Footer';
import React, { useState, useEffect } from 'react';
import { AddTodo } from './AppComponents/AddTodo';


function App() {

  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }


  const onDelete = (todo) => {
    console.log("I am on delete of todo", todo)
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    console.log("Adding this todo", title, desc);
    let srno;
    if (srno === 0) {
      srno = 0;
    } else {
      srno = todos[todos.length - 1].srno + 1;
    }


    const myTodo = {
      srno: srno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);

  }


  const [todos, setTodos] = useState([initTodo]);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  return (
    <>

    <Header title="Todos List" searchBar={false} />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
   
   
    </>
  );
}

export default App;
