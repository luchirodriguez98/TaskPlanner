import React from 'react';
// import '../App/App.css';
import { useLocalStorage } from "./UseLocalStorage";
import { AppUI } from './AppUI';

// export const defaultToDos = [
//   {text: 'Cortar Cebolla', completed: false},
//   {text: 'Comprar leche', completed: true},
//   {text: 'Llamar oculista', completed: false},
//   {text: 'Hacer tarea de ingles', completed: true},
// ];



function App() {

//estado para contador

const[toDos,saveToDos]=useLocalStorage('TODOS_V1',[]);

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
  const toDoIndex = newToDos.findIndex((toDo) => toDo.text === text);
  newToDos[toDoIndex].completed = true;

  saveToDos(newToDos);
}

const deleteToDos = (text) =>{

  const newToDos = [...toDos];
  const toDoIndex = newToDos.findIndex((toDo) => toDo.text === text);
  newToDos.splice(toDoIndex,1);

  saveToDos(newToDos);
}

  return (
    <AppUI 
    completedToDos = {completedToDos}
     totalToDos = {totalToDos}
     searchValue = {searchValue} 
     setSearchValue = {setSearchValue}
     searchedToDos = {searchedToDos} 
     completeToDos = {completeToDos} 
     deleteToDos = {deleteToDos}
     />
  )
}

export {App};
export {useLocalStorage};
