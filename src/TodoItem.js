import React, { PureComponent } from 'react';
import styles from './TodoItem.module.css';
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
/* eslint-disable react/destructuring-assignment */
export default class TodoItem extends PureComponent {
  render() {
    const { completed, id, title } = this.props.todo;
    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };
    return (
      <li className={styles.item}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={this.props.todo.completed}
          onChange={() => this.props.handleChangeProps(id)}
        />
        <button type="button" onClick={() => this.props.deleteTodoProps(id)}>Delete</button>
        <span style={completed ? completedStyle : null}>
          {title}
        </span>
      </li>
    );
  }
}
