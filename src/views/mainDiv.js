function createMain(){
    const mainDiv = document.createElement('div');
    const title = document.createElement('h2');
    const addTodoButton = document.createElement('button');
    const todoList = document.createElement('div');

    title.classList.add('h2');
    addTodoButton.classList.add('add-todo-button');
    todoList.classList.add('todo-list');

    title.innerText = 'Current Project TODO List';
    addTodoButton.innerText = '+';

    mainDiv.append(title, addTodoButton, todoList);
    return mainDiv;
}



export default createMain;