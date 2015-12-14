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
      <Panel>
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
