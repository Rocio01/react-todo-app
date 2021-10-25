import React, { PureComponent } from 'react';

export default class TodoItem extends PureComponent {
  render() {
    return <li>{this.props.todo.title}</li>;
  }
}
