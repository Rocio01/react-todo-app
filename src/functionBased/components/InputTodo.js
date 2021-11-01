import React, { useState } from 'react';

/* eslint-disable react/destructuring-assignment */
/* eslint-disable  react/prop-types */

const InputTodo = (props) => {
  const [title, setTitle] = (useState(''));

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      props.addTodoProps(title);
      setTitle('');
    } else {
      alert('Please write item');
    }
  };

  return (
    <form className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={title}
        name="title"
        onChange={onChange}
      />
      <button type="button" className="input-submit" onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default InputTodo;
