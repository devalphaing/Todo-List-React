/* eslint-disable */ 

import './App.css';

import Header from "./MyComponents/Header";
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import AddTodo from './MyComponents/AddTodo';
import About from './MyComponents/About';
import React, { useState, useEffect } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function TestApp() {

  const HomePage = ()=>{
    return(
      <>
        <AddTodo addTodo={addTodo}/>
        <Todos todos={todos} onDelete={onDelete}/>
      </>
    );
  }

  let initTodo;
  if(localStorage.getItem("todos") === null){
    initTodo = [];
  }else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo)=>{
    console.log('I am on Delete!!');
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
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

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  

  return (
    <>
      <Router>
        <Header title="My Todos List" searchBar={true}/>

        <Routes>
          <Route exact path="/" element={<HomePage />}/>
          <Route exact path="/about" element={<About />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default TestApp;
