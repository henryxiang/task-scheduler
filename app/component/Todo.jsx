import React from 'react';
import { Row, Col, Glyphicon, Button} from 'react-bootstrap';
import moment from 'moment';

const Todo = ({
  onClick,
  onRemove,
  completed,
  text,
  deadline
}) => (
    <Row onClick={onClick}>
      <Col xs={6}>
        {text}
      </Col>
      <Col xs={3}>
        {deadline == null ? 'No Deadline' : moment(deadline).format('ddd, MM/DD/YYYY, h:mm A')}
      </Col>
      <Col xs={2}>
        {completed ? 'Completed' : 'Active'}
      </Col>
      <Col xs={1}>
        <Button onClick={onRemove}><Glyphicon glyph="remove" /></Button>
      </Col>
    </Row>
);

export default Todo;
