import React from 'react';
import { Row, Col, Panel } from 'react-bootstrap';
import Todo from './Todo.jsx';
import moment from 'moment';

const TodoList = ({
  todos,
  onTodoClick,
  onRemoveTodo,
  title
}) => {
  const sortedTodos = todos.sort((todo1,todo2) => (todo1.deadline - todo2.deadline));
  title = title ? title : 'Task List (click on an entry to change the status)'
  return (
    <Row>
      <Col xs={9}>
        <Panel header={title}>
          {sortedTodos.map(todo =>
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
};

export default TodoList;
