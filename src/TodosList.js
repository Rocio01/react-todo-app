import React, { PureComponent } from 'react';
import TodoItem from './TodoItem';

export default class TodosList extends PureComponent {
  render() {
    return (
      <div>

        <ul>
          {this.props.todos.map((todo) => (
            <TodoItem key={TodoItem.id} todo={todo} />
          ))}
        </ul>

      </div>
    );
  }
}
