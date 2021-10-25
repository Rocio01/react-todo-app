import React, { PureComponent } from 'react';
import Header from './Header';
import TodosList from './TodosList';

export default class TodoContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          title: 'Setup development environment',
          completed: true,
        },
        {
          id: 2,
          title: 'Develop website and add content',
          completed: false,
        },
        {
          id: 3,
          title: 'Deploy to live server',
          completed: false,
        },

      ],

    };
  }

  render() {
    return (
      <div>
        <Header />
        <TodosList todos={this.state.todos} />
      </div>
    );
  }
}
