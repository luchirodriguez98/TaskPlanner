import React from "react";
import { ToDoContext } from "../ToDoContext/ToDoContext"

function ToDoForm (){

    const {setOpenModal, addToDo} = React.useContext(ToDoContext);

    //logica de modal
    const onSubmit = (event)=>{
        event.preventDefault();
        addToDo(newToDoValue);
        setOpenModal(false);
    };

    const onCancel = ()=>{
        setOpenModal(false)
    };

    const onChange = (event)=>{
        setNewToDoValue(event.target.value)
    };
    
    //creamos estado LOCAL para guardar el nuevo TODO
    const [newToDoValue, setNewToDoValue] =React.useState('');

    return(
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo To Do</label>
            <textarea  placeholder="Cortar cebolla" value={newToDoValue} onChange={onChange}/>
            <button type="button" onClick={onCancel}>Cancelar</button>
            <button>Guardar</button>
        </form>
    )
}

export {ToDoForm}