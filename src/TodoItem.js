import React, { PureComponent } from 'react';
import styles from './TodoItem.module.css';
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */

export default class TodoItem extends PureComponent {
state = {
  editing: false,
}

  handleEditing = () => {
    this.setState({
      editing: true,
    });
  }

  handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      this.setState({ editing: false });
    }
  }

  render() {
    const viewMode = {};
    const editMode = {};
    if (this.state.editing) {
      viewMode.display = 'none';
    } else {
      editMode.display = 'none';
    }

    const { completed, id, title } = this.props.todo;
    const completedStyle = {
      fontStyle: 'italic',
      color: '#595959',
      opacity: 0.4,
      textDecoration: 'line-through',
    };
    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
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
        </div>

        <input
          type="text"
          style={editMode}
          className={styles.textInput}
          placeholder={title}
          value={this.state.title}
          onChange={(e) => {
            this.props.setUpdate(e.target.value, id);
          }}
          onKeyDown={this.handleUpdatedDone}
        />

      </li>
    );
  }
}
