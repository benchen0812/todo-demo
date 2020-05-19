import React from 'react';
import { observer } from "mobx-react";
import '../todomvc-app-css/index.css';
import './TodoView.css';

const TodoView = observer(class TodoView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {editable:false};
  }
  render() {
    const todo = this.props.todo;
    return (
            <li>
                <div className="view">
                    <input
                        className="toggle"
                        type="checkbox"
                        checked={todo.completed}
                        onChange={this.onToggleCompleted}
                    />
                    <label 
                      className={todo.completed? "completed": ""} 
                      onDoubleClick={this.setEditable} 
                      contentEditable={this.state.editable} 
                      onBlur={this.onRename}>
                        {todo.task}
                    </label>
                    <button className="destroy" onClick={this.onDestroy} />
                </div>
            </li>
    );
  }

  setEditable = (event) =>{
    this.setState({editable: true});
    event.target.focus();
  }

  onToggleCompleted = () => {
    const todo = this.props.todo;
    todo.completed = !todo.completed;
  }

  onRename = (event) => {
    const todo = this.props.todo;
    todo.task = event.target.innerText
    this.setState({editable: false})
  }

  onDestroy = () => {
    // const todo = this.props.todo;
    this.props.onDestroy(this.props.taskId);
  }
})


export default TodoView;