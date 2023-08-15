import React from 'react';
import { ToDoCounter } from "../components/ToDoCounter/ToDoCounter";
import { ToDoSearch } from "../components/ToDoSearch/ToDoSearch";
import { ToDoList } from "../components/ToDoList/ToDoList";
import { ToDoItem } from "../components/ToDoItem/ToDoItem";
import { CreateToDo } from "../components/CreateToDo/CreateToDo";
import { ToDosLoading } from "../components/ToDosLoading/ToDosLoading";
import { ToDosError } from "../components/ToDosError/ToDosError";
import { EmptyToDos } from "../components/EmptyToDos/EmptyToDos";


function AppUI ({completedToDos, totalToDos, searchValue, setSearchValue, searchedToDos, completeToDos, deleteToDos, loading, error}){
  return (

        <React.Fragment>
           <ToDoCounter completed={completedToDos} total={totalToDos}/>
           <ToDoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
           <ToDoList>
            {/* le damos opciones a realizar si esta cargando, si dio error, si el searched todo esta vacio o si esta todo OK*/}
            {loading && <ToDosLoading />}
            {error && <ToDosError />}
            {(!loading && searchedToDos.lenght === 0) && <EmptyToDos />}
            {searchedToDos.map(todo=>(
              <ToDoItem 
              key={todo.text} 
              text={todo.text} 
              completed={todo.completed} 
              onComplete={()=> completeToDos(todo.text)} 
              onDelete={()=> deleteToDos(todo.text)}/>
            ))}
           </ToDoList>
           <CreateToDo />
        </React.Fragment>
      );
}

export {AppUI}