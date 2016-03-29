/*
 * This is the Redux store that provide data access and
 * state mutation via reducer funtions, which takes an
 * action object as parameter and returns the mutated state.
 */

import { createStore, combineReducers } from 'redux';
import moment from 'moment';

const getInitialState = () => {
  const tasks = [];
  // Just create some dummy task object but we can use XHR
  // to retrieve real data from the backend API
  for (let i = 1; i <= 8; i++) {
    const task = {};
    task.id = i;
    task.text = `Task ${i}`;
    task.completed = false;
    task.deadline = moment('2015-09-30 17:00').add(i, 'M');
    tasks.push(task);
  }
  return tasks;
};

// Reducer function to mutate the state of a single Todo object
// based on an action, which is an object type that consists of 
// a required 'type' key and data payload.
const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        deadline: action.deadline,
        completed: false
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }

      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state;
  }
};

// Reducer function to mutate the state of a list of Todo objects
const todos = (state = getInitialState.call(null), action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ];
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      );
    case 'REMOVE_TODO':
      return state.filter(t =>
        t.id != action.id
      );
    default:
      return state;
  }
};

// Reducer funtion to change the state of visibility filter
const visibilityFilter = (
  state = 'SHOW_ALL',
  action
) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

// The application main reducer function
const todoApp = combineReducers({
  todos,
  visibilityFilter
});

// Defines the Redux store object, which can be
// later injected into component's context
export default createStore(todoApp);
