import { Component } from 'react';
import Header from './Header';
// import TodoItem from './TodoItem';
import TodosList from './TodosList';
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-access-state-in-setstate */

export default class TodoContainer extends Component {
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

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  delTodo = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter((todo) => todo.id !== id),
      ],
    });
  };

  render() {
    return (
      <div>
        <Header />
        <TodosList
          todos={this.state.todos}
          handleChangeProps={this.handleChange}
          deleteTodoProps={this.delTodo}
        />
      </div>
    );
  }
}
