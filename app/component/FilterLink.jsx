import React, { Component } from 'react';
import { Badge, Button } from 'react-bootstrap';

const Link = ({
  active,
  children,
  onClick
}) => {
  if (active) {
    return <Button bsStyle="primary">{children}</Button>;
  }

  return (
    <Button onClick={e => {
         e.preventDefault();
         onClick();}}>
      {children}
    </Button>
  );
};

class FilterLink extends Component {
  componentDidMount() {
    const { store } = this.context;
    this.unsubscribe = store.subscribe(() =>
      this.forceUpdate()
    );
  }
  
  componentWillUnmount() {
    this.unsubscribe();
  }

  getTodoCounts(type) {
    const { store } = this.context;
    const state = store.getState();
    if (state == null || state.todos == null) {
      return 0;
    }
    else {
      switch (type) {
        case 'SHOW_ACTIVE':
          const activeTodos = state.todos.filter(t => !t.completed);
          return activeTodos.length;
        case 'SHOW_COMPLETED':
          const completedTodos = state.todos.filter(t => t.completed);
          return completedTodos.length;
        default:
          return state.todos.length;
      }
    }
  }
  
  render() {
    const props = this.props;
    const { store } = this.context;
    const state = store.getState();
    
    return (
      <Link
        active={
          props.filter ===
          state.visibilityFilter
        }
        onClick={() =>
          store.dispatch({
            type: 'SET_VISIBILITY_FILTER',
            filter: props.filter
          })
        }>
          {props.children} <Badge>{this.getTodoCounts(this.props.filter)}</Badge>
      </Link>
    );
  }
}
FilterLink.contextTypes = {
  store: React.PropTypes.object
};

export default FilterLink;
