import './CreateToDo.css';

function CreateToDo({setOpenModal}) {
    
    return(
        <button className="addTask-button-mobile" onClick={()=> {
            setOpenModal(state => !state)            
        }}>+</button>
    )
}

export {CreateToDo}