import Todo from "../models/Todo";


export default class todoElement{
    
    constructor(todo){
        this.todo = todo;
    }

    createElement(){
        const todoListContainer = document.createElement('div');
        const todoTitleH3 = document.createElement('h3');
        const todoDueDateh3 = document.createElement('h5');
        const divTodoOptions = document.createElement('div');
        const buttonCompletedTodo = document.createElement('button');
        const buttonDeleteTodo = document.createElement('button');

        buttonCompletedTodo.innerHTML = 'Completed';
        buttonDeleteTodo.innerText = 'Delete';

        buttonCompletedTodo.value = this.todo.id;
        buttonDeleteTodo.value = this.todo.id;
        todoTitleH3.innerText = this.todo.title;
        todoDueDateh3.innerText = this.todo.dueDate;

        todoListContainer.append(todoTitleH3, todoDueDateh3, divTodoOptions);
        divTodoOptions.append(buttonCompletedTodo, buttonDeleteTodo);

        return todoListContainer;
    }
}
