/* 
 * This is the entry point of application.
 * It serves for two purpose:
 * 1) Initialize a Redux data store and provide data access to
 *    the main TodoApp component and its child components via 
 *    a context injected store object. 
 * 2) Bootstraps the application by mounting it to the 
 *    specified application root element in DOM
 */

import './css/bootstrap.min.css'
import './css/react-widgets.css';
//import './css//main.css';

import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import TodoApp from './component/App.jsx';
import appStore from './store/appStore.js';

// Creat the application root DOM element
const appRootElement = document.createElement('div');
appRootElement.className = 'app';
document.body.appendChild(appRootElement);

// Render the application to the root element in DOM
ReactDOM.render(
  <Provider store={appStore}>
  	{/* Main app component */}
    <TodoApp />
  </Provider>,
  appRootElement
);
