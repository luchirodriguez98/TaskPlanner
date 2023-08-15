import React from 'react';
// import '../App/App.css';
// import { useLocalStorage } from "../components/ToDoContext/UseLocalStorage";
import { AppUI } from './AppUI';
import { ToDoProvider } from '../components/ToDoContext/ToDoContext';



function App() {
  return (
    <ToDoProvider>
      <AppUI />
    </ToDoProvider>
  )
}

export {App};
