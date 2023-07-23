import React from 'react';
import './App.css';
import { ToDoCounter } from "./components/ToDoCounter";
import { ToDoSearch } from "./components/ToDoSearch";
import { ToDoList } from "./components/ToDoList";
import { ToDoItem } from "./components/ToDoItem";
import { CreateToDo } from "./components/CreateToDo";

export const defaultToDos = [
  {text: 'Cortar Cebolla', completed: false},
  {text: 'Comprar leche', completed: true},
  {text: 'Llamar oculista', completed: false},
  {text: 'Hacer tarea de ingles', completed: true},
];

function App() {
  return (
    <React.Fragment>
       <ToDoCounter completed={16} total={25}/>
       <ToDoSearch />
       <ToDoList>
        {defaultToDos.map(todo=>(
          <ToDoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
       </ToDoList>
       <CreateToDo />
    </React.Fragment>
  );
}

export {App};
