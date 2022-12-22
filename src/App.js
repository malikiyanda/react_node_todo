// import './App.css';
// import React, {useEffect, useState} from 'react';
// import TodoForm from './Components/TodoForm';
// import TodoList from './Components/TodoLists';
// import { Typography } from '@material-ui/core/';


// const LOCAL_STORAGE_KEY = "react-todo-list-todos";


// function App() {
//   const [todos, setTodos] = useState([]);

//   //use effect with empty dependency array 
//   //load todo because if no change in dependacy array effect is runs only once during initalisation.
//   useEffect(() => {
//     const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
//     if(storageTodos){
//       setTodos(storageTodos)
//     }
    
//   }, []);

//   useEffect(()=> {
//     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
//   }, [todos]);
  
//   function addTodo(todo) {
//     setTodos([todo,...todos]);
//   }

//   function removeTodo(id){
//     setTodos(todos.filter(todo => todo.id !== id))

//   }

//   function toggleComplete(id){
//     setTodos(
//       todos.map(todo => {
//         if (todo.id === id){
//           return{
//             ...todo, 
//             complete: !todo.completed
//           };
//         }
//         return todo;
//       })
//     );
//   }


//   return (
//     <div className="App">
          
//       <Typography style={{ padding: 16}} variant="h1">
//         React Todo
//       </Typography>

//       <TodoForm addTodo={addTodo} />
//       <TodoList 
//         todos={todos} 
//         toggleComplete={toggleComplete}
//         removeTodo={removeTodo}
//         />


//     </div>
//   );
// }

// export default App;


import Typography from "@material-ui/core/Typography";
import React, { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./Components/TodoForm";
import TodoList from "./Components/TodoList";

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // fires when app component mounts to the DOM
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    // fires when todos array gets updated
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    // adds new todo to beginning of todos array
    setTodos([todo, ...todos]);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div className="App">
      <Typography style={{ padding: 16 }} variant="h1">
        React Todo
      </Typography>
      
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        toggleComplete={toggleComplete}
      />
    </div>
  );
}

export default App;
