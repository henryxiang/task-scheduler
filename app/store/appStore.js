import { createStore, combineReducers } from 'redux';
import moment from 'moment';


const getInitialState = () => {
  const tasks = [];
  for (let i = 1; i <= 5; i++) {
    const task = {};
    task.id = i;
    task.text = `Task ${i}`;
    task.completed = false;
    task.deadline = moment('2015-09-30 17:00').add(i, 'M');
    tasks.push(task);
  }
  return tasks;
};

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

// app main reducer function
const todoApp = combineReducers({
  todos,
  visibilityFilter
});

export default createStore(todoApp);
