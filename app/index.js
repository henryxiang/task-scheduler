import './css/bootstrap.min.css'
import './css/react-widgets.css';
//import './css//main.css';

import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import TodoApp from './component/App.jsx';
import appStore from './store/appStore.js';


const appRootElement = document.createElement('div');
appRootElement.className = 'app';
document.body.appendChild(appRootElement);

ReactDOM.render(
  <Provider store={appStore}>
    <TodoApp />
  </Provider>,
  appRootElement
);
