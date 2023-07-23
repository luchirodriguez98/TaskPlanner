
function ToDoItem({text, completed}) {
    return(
        <li>
            <span>V{completed}</span>
            <p>{text}</p>
            <span>X</span>
        </li>
    )
}

export {ToDoItem};