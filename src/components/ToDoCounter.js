function ToDoCounter({total, completed}) {
    return(
        completed === total?
            <h3>
                Has completado todas tus tareas!
            </h3>
        :
            <h3>
            Has completado {completed} de {total} tareas
            </h3>
    )    
}

export {ToDoCounter};