function CreateToDo({setOpenModal}) {
    return(
        <button onClick={()=> {
            setOpenModal(state => !state)            
            console.log('boton apretado')
        }}>+</button>
    )
}

export {CreateToDo}