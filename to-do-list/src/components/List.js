// This code is a React functional component called "List". It uses the "useState" hook from 
//the React library to manage the state of the "todos" array.

import React, {useState} from 'react';

//it imports the "Todo" and "Form" components from the local "./Todo" and "./Form" files respectively. 

import Todo from './Todo';
import Form from './Form';

// it imports "axios" library for making HTTP requests.

import axios from '../apis/index';
import Logo from '../img/Logo.png';

// The component starts with the "List" function. Inside the function, it declares a state variable "todos" using the
// "useState" hook and sets it to an empty array.
function List() {
    
    const [todos, setTodos] = useState([]);
    
    
// The "addTodo" method takes a "todo" object as an argument, checks if it is empty or only whitespace, and if not, adds
// it to the beginning of the "todos" array using the spread operator and
// calls the "setTodos" function to update the state.

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)) { return;}
        const newTodos = [todo, ...todos];
        setTodos(newTodos);

    };

    //The "updateTodo" method takes a "todoId" and a "newValue" object as arguments, checks if the newValue
    // is empty or only whitespace, and if not, maps over the "todos" array and updates the item with the matching 
    //"todoId" with the "newValue" object and calls the "setTodos" function to update the state.

    const updateTodo = (todoId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
            }
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item))
        );
    };


    // The "removeTodo" method takes an "id" as an argument, filters the "todos" array to remove the item with the matching
    // "id", and calls the "setTodos" function to update the state.

    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id !== id)
        setTodos(removeArr);
    };

    //The "completeTodo" method takes an "id" as an argument, maps over the "todos" array and toggles the "isComplete" property
    // of the item with the matching "id", and calls the "setTodos" function to update the state.

    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };


    //eturns JSX that renders an image, a heading, a "Form" component with an "onSubmit" prop set to the "addTodo"
    // method, and a "Todo" component with several props passed to it for managing the todos.
    
  return (
    
    <div>
        <img src={Logo}/>
        <h1 className='tit-to-do'>TO DO LIST</h1>
        <Form onSubmit={addTodo} />
        <Todo todos={todos} completeTodo={completeTodo}  
        removeTodo={removeTodo} updateTodo={updateTodo}/>
    </div>
  );
}

export default List;