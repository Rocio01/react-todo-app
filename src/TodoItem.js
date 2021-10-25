import React, { PureComponent } from 'react';
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
/* eslint-disable react/destructuring-assignment */
export default class TodoItem extends PureComponent {
  render() {
    return (
      <li>
        <input
          type="checkbox"
          checked={this.props.todo.completed}
          onChange={() => this.props.handleChangeProps(this.props.todo.id)}
        />
        <button type="button" onClick={() => this.props.deleteTodoProps(this.props.todo.id)}>Delete</button>
        {this.props.todo.title}
      </li>
    );
  }
}
