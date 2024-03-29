import React from "react";
import CloseIcon from "@material-ui/icons/Close"
import { Checkbox, IconButton, ListItem, Typography } from "@material-ui/core";

function Todo({ todo, toggleComplete, removeTodo }){
    function handleCheckBoxClick(){
        toggleComplete(todo.id);
    }

    function handleRemoveClick(){
        removeTodo(todo.id);
    }

    return (
        <ListItem style={{ display: "flex" }}>
          <Checkbox checked={todo.completed} onClick={handleCheckBoxClick} />
          
          <Typography
            variant="body1"
            style={{
              textDecoration: todo.completed ? "line-through" : null
            }}
          >
            {todo.task}
          </Typography>

          <IconButton onClick={handleRemoveClick}>
            <CloseIcon/>
          </IconButton>

        </ListItem>
      );
}

export default Todo;

