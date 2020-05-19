import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList'
import ObservableTodoStore from './store/ObservableTodoStore'

const observableTodoStore = new ObservableTodoStore();

ReactDOM.render(
  <TodoList store={ observableTodoStore } />,
  document.getElementById('root')
);