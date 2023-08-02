import React from "react";

function ToDoSearch({searchValue, setSearchValue}) {

    return(
        <input 
        placeholder="Buscar tareas" 
        value={searchValue} 
        onChange={(event)=> setSearchValue(event.target.value)}></input>
    )
}

export {ToDoSearch};