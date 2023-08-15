import React from "react";
import { ToDoContext } from "../ToDoContext/ToDoContext";

function ToDoCounter() {

    const {totalToDos, completedToDos} = React.useContext(ToDoContext)

    return(
        completedToDos === totalToDos?
            <h3>
                Has completado todas tus tareas!
            </h3>
        :
            <h3>
            Has completado {completedToDos} de {totalToDos} tareas
            </h3>
    )    
}

export {ToDoCounter};