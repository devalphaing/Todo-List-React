import './App.css';

import Header from "./MyComponents/Header";
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import AddTodo from './MyComponents/AddTodo';
import React, { useState } from 'react';

function TestApp() {

  const onDelete = (todo)=>{
    console.log('I am on Delete!!');
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
  }

  const addTodo = (title, desc)=>{
    const sno = todos.length+1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo]);
  }

  const [todos, setTodos] = useState(
    [
      {
        sno: 1, 
        title: "Go to the market",
        desc: 'You need to go to market to get this job done1'
      },
      {
        sno: 2, 
        title: "Study",
        desc: 'You need to study to get this job done2'
      },
      {
        sno: 3, 
        title: "Go to the mall",
        desc: 'You need to go to mall to get this job done3'
      }
    ]
  );

  return (
    <>
      <Header title="My Todos List" searchBar={true}/>
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer />
    </>
  );
}

export default TestApp;
