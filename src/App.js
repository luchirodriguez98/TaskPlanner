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

//estado para contador
const [toDos, setToDos] = React.useState(defaultToDos);

const completedToDos = toDos.filter(toDo=> toDo.completed).length;
const totalToDos= toDos.length;

//estado para busqueda
const [searchValue, setSearchValue] = React.useState('');
console.log(searchValue);

//estado para lista
const searchedToDos = toDos.filter(todo=>todo.text.toLowerCase().includes(searchValue.toLowerCase()));
console.log(searchedToDos);

//estado para items(marcar como hecho o eliminar)

const completeToDos = (text) =>{

  const newToDos = [...toDos];
  const toDoIndex = newToDos.findIndex((toDo) => toDo.text == text);
  newToDos[toDoIndex].completed = true;

  setToDos(newToDos);
}

const deleteToDos = (text) =>{

  const newToDos = [...toDos];
  const toDoIndex = newToDos.findIndex((toDo) => toDo.text == text);
  newToDos.splice(toDoIndex,1);

  setToDos(newToDos);
}

  return (
    <React.Fragment>
       <ToDoCounter completed={completedToDos} total={totalToDos}/>
       <ToDoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
       <ToDoList>
        {searchedToDos.map(todo=>(
          <ToDoItem key={todo.text} text={todo.text} completed={todo.completed} onComplete={()=> completeToDos(todo.text)} onDelete={()=> deleteToDos(todo.text)}/>
        ))}
       </ToDoList>
       <CreateToDo />
    </React.Fragment>
  );
}

export {App};
