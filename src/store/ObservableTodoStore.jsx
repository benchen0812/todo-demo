
import {observable, computed, decorate} from "mobx";

class ObservableTodoStore {
	// observable
	todos = []
	activeView = "allTask"

	// computed
    get completedTodos() {
    	return this.todos.filter(
			todo => todo.completed === true
		);
	}
	
	// computed
    get activeTodos() {
    	return this.todos.filter(
			todo => todo.completed === false
		);
    }

	addTodo(task) {
		this.todos.push({
			task: task,
			completed: false,
			// assignee: null
		});
    }
    
    removeTodo(idxToDel) {
        this.todos = this.todos.filter((todo, idx) => idx !== idxToDel);
	}
}

decorate(ObservableTodoStore, {
	todos: observable,
	activeView: observable,
    completedTodos: computed,
    activeTodos: computed,
});

export default ObservableTodoStore;