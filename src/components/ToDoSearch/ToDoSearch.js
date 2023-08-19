import React from "react";
import './ToDoSearch.css';
import { ToDoContext } from "../ToDoContext/ToDoContext";
import imageSearch from "../../img/search.png"

function ToDoSearch() {

    const {searchValue, setSearchValue} = React.useContext(ToDoContext)

    return(
        <div className="input-search">
            <input 
            placeholder="Search your tasks" 
            value={searchValue} 
            onChange={(event)=> setSearchValue(event.target.value)}></input>
            <img className="img-search" src={imageSearch}></img>
        </div>
    )
}

export {ToDoSearch};