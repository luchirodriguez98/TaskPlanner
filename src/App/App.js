import React from 'react';
// import '../App/App.css';
import { ToDoCounter } from "../components/ToDoCounter/ToDoCounter";
import { ToDoSearch } from "../components/ToDoSearch/ToDoSearch";
import { ToDoList } from "../components/ToDoList/ToDoList";
import { ToDoItem } from "../components/ToDoItem/ToDoItem";
import { CreateToDo } from "../components/CreateToDo/CreateToDo";

// export const defaultToDos = [
//   {text: 'Cortar Cebolla', completed: false},
//   {text: 'Comprar leche', completed: true},
//   {text: 'Llamar oculista', completed: false},
//   {text: 'Hacer tarea de ingles', completed: true},
// ];
function useLocalStorage(itemName,initialValue){

  //actualizar estado y local storage

  const localStorageItem=localStorage.getItem(itemName);
  
  let parsedItem;
  
  if(!localStorageItem){
    localStorage.setItem(itemName,JSON.stringify(initialValue));
    parsedItem=initialValue;
  }else{
    parsedItem=JSON.parse(localStorageItem);
  }

  const[item,setItem]=React.useState(parsedItem);
  
  const saveItem=(newItem)=>{
    localStorage.setItem(itemName,JSON.stringify(newItem));
    setItem(newItem);
  };
  
  return[item,saveItem];
}


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
export {useLocalStorage};
