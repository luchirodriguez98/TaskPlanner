
function ToDoItem({text, completed, onComplete,onDelete}) {
    return(
        <li>
            <span className={`Icon Icon-check ${completed && "Icon-check--active"}`} onClick={onComplete}>V</span>
            <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>{text}</p>
            <span className={"Icon Icon-delete"} onClick={onDelete}>X</span>
        </li>
    )
}

export {ToDoItem};