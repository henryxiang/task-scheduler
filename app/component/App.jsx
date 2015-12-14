import React from 'react';
import { Panel } from 'react-bootstrap';
import AddTodo from './AddTodo.jsx';
import VisibleTodoList from './VisibleTodoList.jsx';
import Footer from './Footer.jsx';

const title = (<h3>Task Scheduler</h3>);

const TodoApp = () => (
  <Panel header={title}>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </Panel>
);

export default TodoApp;
