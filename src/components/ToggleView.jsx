import React from 'react';
import { observer } from "mobx-react";
import '../todomvc-app-css/index.css';
import './ToggleView.css';

const ToggleView = observer(class ToggleView extends React.Component {
  render() {
    return (
      <div className="toggle-switch">
        <span onClick={ () => {this.setView("allTask")} } > All </span>
        <span onClick={ () => {this.setView("activeTask")} } > Active </span>
        <span onClick={ () => {this.setView("completeTask")} } > Completed </span>
        <div> (double-click a todo to edit)</div>
      </div>
    );
  }

  setView (activeView) {
    this.props.setViewFn(activeView)
  }
})

export default ToggleView;