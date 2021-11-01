import React from 'react';
import TodoItem from './TodoItem';
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

/* eslint-disable react/destructuring-assignment */
const TodosList = (props) => (
  <div>

    <ul>
      {props.todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={props.handleChangeProps}
          deleteTodoProps={props.deleteTodoProps}
          setUpdate={props.setUpdate}
        />
      ))}
    </ul>

  </div>
);
export default TodosList;
