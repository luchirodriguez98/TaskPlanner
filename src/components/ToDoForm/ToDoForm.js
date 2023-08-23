import React from "react";
import './ToDoForm.css';
import imagen from "../../img/imagen-tablet.jpg";

function ToDoForm ({setOpenModal, addToDo}){

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
            <h2  className="title-principal-tablet">TASK<br/> PLANNER</h2>
            <label>Escribe tu nuevo To Do</label>
            <input className="TodoForm-input" placeholder="Ir al supermercado" value={newToDoValue} onChange={onChange}/>
            <div className="TodoForm-buttonContainer">
            <button className="TodoForm-button TodoForm-button--cancel" type="button" onClick={onCancel}>Cancelar</button>
            <button className="TodoForm-button TodoForm-button--add" >Guardar</button>
            </div>
            <img src={imagen} className="img-tablet"></img>
        </form>
    )
}

export {ToDoForm}