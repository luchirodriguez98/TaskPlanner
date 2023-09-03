import React from "react";
import './UseTodos.css';
import { useLocalStorage } from "./UseLocalStorage";

function useTodos (){

    
    //estado para modal
    const [openModal, setOpenModal] =React.useState(false);

    //estado para contador

    const{item:toDos,saveItem:saveToDos, loading, error}=useLocalStorage('TODOS_V2',[]);

    const completedToDos = toDos.filter(toDo=> toDo.completed).length;
    const totalToDos= toDos.length;

    //estado para busqueda
    const [searchValue, setSearchValue] = React.useState('');


    //estado para lista
    const searchedToDos = toDos.filter(todo=>todo.text.toLowerCase().includes(searchValue.toLowerCase()));
    console.log(searchedToDos);

    //estado para items(marcar como hecho o eliminar)

    const completeToDos = (id) =>{

    const newToDos = [...toDos];
    const toDoIndex = newToDos.findIndex((toDo) => toDo.id === id);
    newToDos[toDoIndex].completed = true;

    saveToDos(newToDos);
    }

    const deleteToDos = (id) =>{

    const newToDos = [...toDos];
    const toDoIndex = newToDos.findIndex((toDo) => toDo.id === id);
    newToDos.splice(toDoIndex,1);

    saveToDos(newToDos);
    }

    //agregar item

    const addToDo = (text) =>{
        const id = newToDoID(toDos);
        const newToDos = [...toDos];
        newToDos.push({
            text,
            completed: false, 
            id
        })

        saveToDos(newToDos);
    }

    return{
        completedToDos, 
        totalToDos, 
        searchValue, 
        setSearchValue, 
        searchedToDos, 
        completeToDos, 
        deleteToDos, 
        addToDo, 
        loading, 
        error, 
        openModal, 
        setOpenModal,
    }
}

function newToDoID (todolist){
    if(!todolist.length){return 1}
    
    const IDlist = todolist.map(todo => todo.id)
    const maxID = Math.max(...IDlist)
    return maxID + 1
}

export {useTodos}
