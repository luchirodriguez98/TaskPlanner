import React from 'react';
import './App.css';
import { ToDoCounter } from "./components/ToDoCounter";
import { ToDoSearch } from "./components/ToDoSearch";
import { ToDoList } from "./components/ToDoList";
import { ToDoItem } from "./components/ToDoItem";
import { CreateToDo } from "./components/CreateToDo";

// export const defaultToDos = [
//   {text: 'Cortar Cebolla', completed: false},
//   {text: 'Comprar leche', completed: true},
//   {text: 'Llamar oculista', completed: false},
//   {text: 'Hacer tarea de ingles', completed: true},
// ];

function useLocalStorage (){

  //actualizar estado y local storage

  const localStorageToDos = localStorage.getItem('TODOS_V1');
  let parsedToDos;

  if(!localStorageToDos){
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedToDos = [];
  } else{
    parsedToDos= JSON.parse(localStorageToDos);
  }

  const saveToDos = (newToDos) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newToDos));
    setToDos(newToDos)
  }
}



function App() {

//estado para contador
const [toDos, setToDos] = React.useState(parsedToDos);

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

  saveToDos(newToDos);
}

const deleteToDos = (text) =>{

  const newToDos = [...toDos];
  const toDoIndex = newToDos.findIndex((toDo) => toDo.text == text);
  newToDos.splice(toDoIndex,1);

  saveToDos(newToDos);
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
