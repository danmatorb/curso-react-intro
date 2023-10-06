// import logo from "./platzi.webp";
import { AppUI } from './AppUI';

import "./App.css";
import React from "react";
import { TodoProvider } from '../TodoContext';


// const defaulTodos = [{text: "Cortar Cebolla", completed: true},
// {text: "Tomar Curso", completed: false},
// {text: "Llorar", completed: false},
// {text: "Lala", completed: false},
// {text: "Usar estados derivados", completed: true}
// ]; 

// localStorage.setItem("TODOS_V1", JSON.stringify(defaulTodos));
// localStorage.removeItem("TODOS_V1");


function App() {
  
  // const [todos, setTodos] = React.useState(defaulTodos);
  // const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage("TODOS_V1", []); // item: todos es como un Alias

  // const [searchValue, setSearchValue] = React.useState('');

  // const completedTodos = todos.filter(todo => !!todo.completed).length;
  // const totalTodos = todos.length;

  // console.log("Log 1");

  // React.useEffect(() => {
  //   console.log("Looooooooooooooog 2");
  // });

  // React.useEffect(() => {
  //   console.log("Looooooooooooooog 2");
  // },[]);

  // React.useEffect(() => {
  //   console.log("Looooooooooooooog 2");
  // },[totalTodos]); //Cuando se cambia el estado se dispara

  // console.log("Log 3");

  // const searchedTodos = todos.filter((todo) =>  {
  //   const todoText = todo.text.toLowerCase();
  //   const searchText = searchValue.toLowerCase();
  //   return todoText.includes(searchText);});
  //   // return todo.text.toLowerCase().includes(searchValue.toLowerCase());});
  // // console.log('Los usuarios buscan todos de ' + searchValue);


  // const completeTodo = (text) => {
  //   const newTodos = [...todos];  //copia todo el contenido
  //   const todoIndex = newTodos.findIndex((todo) => todo.text === text);
  //   newTodos[todoIndex].completed = true;
  //   saveTodos(newTodos)
  // };
  // const deleteTodo = (text) => {
  //   const newTodos = [...todos];  //copia todo el contenido
  //   const todoIndex = newTodos.findIndex((todo) => todo.text === text);
  //   newTodos.splice(todoIndex, 1);
  //   saveTodos(newTodos)
  // };



  return (<TodoProvider>
            <AppUI 
                  // loading={loading}
                  // error={error}
                  // completedTodos={completedTodos}
                  // totalTodos={totalTodos}
                  // searchValue={searchValue}
                  // setSearchValue={setSearchValue}
                  // searchedTodos={searchedTodos}
                  // completeTodo={completeTodo}
                  // deleteTodo={deleteTodo}
                  />
          </TodoProvider>);

}


export default App;
//export default TodoItem;
