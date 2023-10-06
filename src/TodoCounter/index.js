import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoCounter.css";

function TodoCounter() {
//function TodoCounter({total, completed}) {
  
  // const estilos = { backgroundColor: "red" }
  const {
    completedTodos,
    totalTodos
  } = React.useContext(TodoContext)

  return (
    // <h1 style={estilos}>
    // <h1 style={{fontSize: '24px', textAlign: 'center', margin: 0, padding: '48px'}}>    
    <h1 className="TodoCounter">
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs
    </h1>
  );
}

export { TodoCounter };
