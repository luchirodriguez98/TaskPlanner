import './ToDoItem.css';

import {AiOutlineCloseCircle} from 'react-icons/ai';
import {ImRadioChecked, ImRadioUnchecked} from 'react-icons/im'



function ToDoItem({text, completed, onComplete,onDelete}) {

    const iconSelected = completed ? <ImRadioChecked /> : <ImRadioUnchecked />;

    return(
        <li className="list-todo-item">
            <span className="icon icon-complete" onClick={onComplete}>
                {iconSelected}
            </span>

            <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>{text}</p>

            <span className="icon icon-delete" onClick={onDelete}>
                <AiOutlineCloseCircle />
            </span>
        </li>
    )
}

export {ToDoItem};