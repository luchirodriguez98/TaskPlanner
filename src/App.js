import logo from './platzi.webp';
import './App.css';
import { ToDoCounter } from "./components/ToDoCounter";
import { ToDoSearch } from "./components/ToDoSearch";
import { ToDoList } from "./components/ToDoList";
import { ToDoItem } from "./components/ToDoItem";
import { CreateToDo } from "./components/CreateToDo";

function App() {
  return (
    <div className="App">
       <ToDoCounter />
       <ToDoSearch />
       <ToDoList>
        <ToDoItem />
       </ToDoList>
       <CreateToDo />
    </div>
  );
}

export {App};
