import React from "react";
import './ToDoSearch.css';
import imageSearch from "../../img/search.png"

function ToDoSearch({searchValue, setSearchValue}) {


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