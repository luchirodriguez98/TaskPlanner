import React from 'react';
// import '../App/App.css';
// import { useLocalStorage } from "../components/ToDoContext/UseLocalStorage";
import { useTodos } from "./UseTodos";
import { ToDoHeader } from '../components/ToDoHeader/ToDoHeader'
import { ToDoCounter } from "../components/ToDoCounter/ToDoCounter";
import { ToDoSearch } from "../components/ToDoSearch/ToDoSearch";
import { ToDoList } from "../components/ToDoList/ToDoList";
import { ToDoItem } from "../components/ToDoItem/ToDoItem";
import { CreateToDo } from "../components/CreateToDo/CreateToDo";
import { ToDosLoading } from "../components/ToDosLoading/ToDosLoading";
import { ToDosError } from "../components/ToDosError/ToDosError";
import { EmptyToDos } from "../components/EmptyToDos/EmptyToDos";
// import { EmptySearchResults } from "../components/EmptySearchResults/EmptySearchResults";
import { ModalMobile } from '../components/Modal/ModalMobile';
import { ModalDesktop } from '../components/Modal/ModalDesktop';
import { ToDoForm } from '../components/ToDoForm/ToDoForm'



function App() {

  const {loading,error,searchedToDos,completeToDos,deleteToDos, openModal, setOpenModal, searchValue, setSearchValue, totalToDos, completedToDos, addToDo} = useTodos();

  return (
    <React.Fragment>
      <ToDoHeader loading={loading}>
        <ToDoCounter totalToDos={totalToDos} completedToDos={completedToDos} />
        <ToDoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
      </ToDoHeader>
        <ToDoList 
          /* le damos opciones a realizar si esta cargando, si dio error, si el searched todo esta vacio o si esta todo OK*/
          error = {error}
          loading = {loading}
          searchedToDos = {searchedToDos}  
          totalToDos = {totalToDos}
          searchValue = {searchValue}
          onError ={()=> <ToDosError />}
          onLoading ={()=> <ToDosLoading />} 
          onEmptyToDos ={()=> <EmptyToDos />} 
          onEmptySearchResults = {(text)=> <p>no hay resultados para "{text}"</p>}
          RenderItems ={todo => (
            <ToDoItem 
                key={todo.text} 
                text={todo.text} 
                completed={todo.completed} 
                onComplete={()=> completeToDos(todo.text)} 
                onDelete={()=> deleteToDos(todo.text)} 
              />
          )}
        />
      <CreateToDo setOpenModal={setOpenModal}/>
       {openModal && (
          <ModalMobile> 
            <ToDoForm setOpenModal={setOpenModal} addToDo={addToDo}/>
          </ModalMobile>
        )}
        <ModalDesktop> 
            <ToDoForm setOpenModal={setOpenModal} addToDo={addToDo}/>
          </ModalDesktop>
    </React.Fragment>
  );
}

export {App};
