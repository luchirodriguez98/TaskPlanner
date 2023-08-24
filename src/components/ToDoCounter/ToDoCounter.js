import React from "react";
import './ToDoCounter.css';

function ToDoCounter({totalToDos, completedToDos, loading}) {

    return(
        completedToDos === totalToDos?
            <h3 className={`counter-title ${loading && "counter-title--loading"}`}>
                Has completado todas tus tareas!
            </h3>
        :
            <h3 className="counter-title">
            Has completado {completedToDos} de {totalToDos} tareas
            </h3>
    )    
}

export {ToDoCounter};