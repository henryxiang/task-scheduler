/*
 * This is a composite component to group together
 * Todo child components.
 */

import React from 'react';
import { Row, Col, Panel } from 'react-bootstrap';
import Todo from './Todo.jsx';

const TodoList = ({
  todos,
  onTodoClick,
  onRemoveTodo
}) => (
  <Row>
    <Col xs={9}>
      <Panel header="Task List (click on a task to change the status)">
        {todos.map(todo =>
          <Todo
            key={todo.id}
            {...todo}
            onClick={() => onTodoClick(todo.id)}
            onRemove={() => onRemoveTodo(todo.id)}
          />
        )}
      </Panel>
    </Col>
  </Row>
);

export default TodoList;
