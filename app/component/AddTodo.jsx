//import 'react-widgets/lib/less/react-widgets.less';

import React, { Component } from 'react'
import { DateTimePicker } from 'react-widgets';
import { Input, Button, Row, Col, Glyphicon } from 'react-bootstrap';
import Moment from 'moment';
import momentLocalizer from 'react-widgets/lib/localizers/moment';

momentLocalizer(Moment);

let nextTodoId = 10;

const AddTodo = (props, { store }) => {
  let input, inputDate;

  const addNewTodo = () => {
    if (input.getValue() !== '' && inputDate != null) {
      store.dispatch({
        type: 'ADD_TODO',
        id: nextTodoId++,
        text: input.getValue(),
        deadline: inputDate
      });
      input.getInputDOMNode().value= '';
    }
  };

  const inputEntered = (e) => {
    if (e.keyCode == 13) {
      addNewTodo.call(this);
    }
  };

  return (
    <div>
      <Row>
        <Col xs={5}>
          <Input 
            type="text" 
            placeholder="Enter a task" 
            ref={comp => input = comp}/>
        </Col>
        <Col xs={3}>
          <DateTimePicker onChange={value => inputDate = value}/>
        </Col>
        <Col xs={1}>
          <Button bsStyle="primary" onClick={addNewTodo.bind(this)}>
            <Glyphicon glyph="plus" />   
          </Button>
        </Col>
      </Row>
      
    </div>
  );
};

AddTodo.contextTypes = {
  store: React.PropTypes.object
};

export default AddTodo;
