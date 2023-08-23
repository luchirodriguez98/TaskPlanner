import React from "react";
import './ToDoCounter.css';

function ToDoCounter({totalToDos, completedToDos}) {

    return(
        completedToDos === totalToDos?
            <h3 className="counter-title">
                Has completado todas tus tareas!
            </h3>
        :
            <h3 className="counter-title">
            Has completado {completedToDos} de {totalToDos} tareas
            </h3>
    )    
}

export {ToDoCounter};