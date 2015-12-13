import React, { Component } from 'react'

let nextTodoId = 0;

const AddTodo = (props, { store }) => {
  let input;

  const addNewTodo = () => {
    store.dispatch({
      type: 'ADD_TODO',
      id: nextTodoId++,
      text: input.value
    });
    input.value = '';
  };

  const inputEntered = (e) => {
    if (e.keyCode == 13) {
      store.dispatch({
        type: 'ADD_TODO',
        id: nextTodoId++,
        text: input.value
      });
      input.value = '';
    }
  };

  return (
    <div>
      <input ref={node => {
          input = node;
        }} 
        onKeyDown={inputEntered.bind(this)}
      />
      <button onClick={addNewTodo.bind(this)}>
        Add Todo
      </button>
    </div>
  );
};

AddTodo.contextTypes = {
  store: React.PropTypes.object
};

export default AddTodo;