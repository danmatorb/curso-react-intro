import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';
function TodoSearch() {
    const {
        searchValue,
        setSearchValue
      } = React.useContext(TodoContext)
    return (
        <input placeholder="Cortar Cebolla" className="TodoSearch" value={searchValue}
        onChange={(event) => {
            // console.log('Todo Search');
            // console.log(event);
            // console.log(event.target);
            // console.log(event.target.value);
            setSearchValue(event.target.value);
        }}
        />
    );
  }
  
  export { TodoSearch };
  