import React from "react";
import { ToDoContext } from "../ToDoContext/ToDoContext";

function ToDoSearch() {

    const {searchValue, setSearchValue} = React.useContext(ToDoContext)

    return(
        <input 
        placeholder="Buscar tareas" 
        value={searchValue} 
        onChange={(event)=> setSearchValue(event.target.value)}></input>
    )
}

export {ToDoSearch};