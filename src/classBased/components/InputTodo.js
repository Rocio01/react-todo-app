import React, { PureComponent } from 'react';

/* eslint-disable react/destructuring-assignment */
/* eslint-disable  react/prop-types */
class InputTodo extends PureComponent {
  constructor() {
    super();
    this.state = {
      title: '',
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.title.trim()) {
      this.props.addTodoProps(this.state.title);
      console.log(this.state.title);
      this.setState({
        title: '',
      });
    } else {
      alert('Please write an item');
    }
  }

  render() {
    return (
      <div>
        <form className="form-container">
          <input
            type="text"
            placeholder="Add todo..."
            value={this.state.title}
            name="title"
            onChange={this.onChange}
          />
          <button type="button" onClick={this.handleSubmit} className="input-submit">Submit</button>
        </form>

      </div>
    );
  }
}

export default InputTodo;
