import React from 'react';
import { ToDoCounter } from "../components/ToDoCounter/ToDoCounter";
import { ToDoSearch } from "../components/ToDoSearch/ToDoSearch";
import { ToDoList } from "../components/ToDoList/ToDoList";
import { ToDoItem } from "../components/ToDoItem/ToDoItem";
import { CreateToDo } from "../components/CreateToDo/CreateToDo";

function AppUI ({completedToDos, totalToDos, searchValue, setSearchValue, searchedToDos, completeToDos, deleteToDos}){
    return (
        <React.Fragment>
           <ToDoCounter completed={completedToDos} total={totalToDos}/>
           <ToDoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
           <ToDoList>
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