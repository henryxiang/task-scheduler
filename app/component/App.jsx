/* 
 * This is the main application component, which is composed of 
 * AddTdo, VisibleTodoList and Footer child components.
 */

import React from 'react';
import { Panel } from 'react-bootstrap';
import AddTodo from './AddTodo.jsx';
import VisibleTodoList from './VisibleTodoList.jsx';
import Footer from './Footer.jsx';

const title = (<h2>Task Scheduler</h2>);

const TodoApp = () => (
  <Panel header={title}>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </Panel>
);

export default TodoApp;
