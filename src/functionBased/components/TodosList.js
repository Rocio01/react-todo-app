import React, { PureComponent } from 'react';
import TodoItem from './TodoItem';
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

/* eslint-disable react/destructuring-assignment */
export default class TodosList extends PureComponent {
  render() {
    return (
      <div>

        <ul>
          {this.props.todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              handleChangeProps={this.props.handleChangeProps}
              deleteTodoProps={this.props.deleteTodoProps}
              setUpdate={this.props.setUpdate}
            />
          ))}
        </ul>

      </div>
    );
  }
}
