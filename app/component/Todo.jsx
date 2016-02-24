import React from 'react';
import { Row, Col, Glyphicon, Button, ButtonGroup } from 'react-bootstrap';
import moment from 'moment';

const Todo = ({
  onClick,
  onRemove,
  onSave,
  completed,
  text,
  deadline
}) => (
    <Row onClick={onClick} style={{cursor:'pointer'}}>
      <Col xs={5}>
        {text}
      </Col>
      <Col xs={3}>
        {deadline == null ? 'No Deadline' : moment(deadline).format('ddd, MM/DD/YYYY, h:mm A')}
      </Col>
      <Col xs={2}>
        {completed ? 'Completed' : 'Active'}
      </Col>
      <Col xs={2}>
        <ButtonGroup>
          <Button onClick={onRemove}><Glyphicon glyph="remove" /></Button>
          <Button onClick={onSave}><Glyphicon glyph="floppy-disk" /></Button>
        </ButtonGroup>
      </Col>
    </Row>
);

export default Todo;
