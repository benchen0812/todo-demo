import React from 'react'
import TodoView from './TodoView'
import ToggleView from './ToggleView'
import { observer } from "mobx-react";
import '../todomvc-app-css/index.css';
import './TodoList.css';

const TodoList = observer(class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {newTask:''};

    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    const store = this.props.store;
    return (
      <div>
        <form className="newTaskForm" onSubmit={this.onNewTodo}>
          <input id='addTodoInput' type='text' onChange={this.handleChange} value={this.state.newTask} placeholder="Enter TodoTask"></input>
          <button type='submit'>Add Todo</button>
        </form>

      <ToggleView setViewFn={this.setView}></ToggleView>
      {this.returnActiveTab(store)}
    
      </div>
    );
  }

  handleChange(event) {
    this.setState({newTask: event.target.value});
  }

  onNewTodo = (event) => {
    event.preventDefault();
    this.props.store.addTodo(this.state.newTask);
    this.setState({newTask: ''});
  }

  onRemoveTodo = (idx) => {
    this.props.store.removeTodo(idx);
  }

  returnActiveTab = (store) => {
    switch(store.activeView){
      case "allTask":
        return (
        <ul className='todo-list'>
          AllTask: { store.todos.map(
          (todo, idx) => <TodoView onDestroy={this.onRemoveTodo} todo={ todo } key={ idx } taskId={idx} />
          )}
        </ul>
        );

      case "completeTask":
          return(
          <ul className='todo-list'>
            Completed: { store.completedTodos.map(
            (todo, idx) => <TodoView onDestroy={this.onRemoveTodo} todo={ todo } key={ idx } taskId={idx}/>
          )}
        </ul>
        );

      case "activeTask":
        return(
          <ul className='todo-list'>
            Active: { store.activeTodos.map(
            (todo, idx) => <TodoView onDestroy={this.onRemoveTodo} todo={ todo } key={ idx } taskId={idx}/>
            )}
          </ul>)
      default:
    }
  }

  setView = (activeView) => {
    this.props.store.activeView = activeView;
  }
});

export default TodoList;