export default class Project {
    constructor(id, name, todoList){
        this.name = name;
        this.id = id;
        this.todoList = todoList;
    }
    
    setName(name){
        this.name 
    }

    getName(){
        return this.name;
    }
    
    setId(id){
        this.id = id;
    }

    getId(){
        return this.id;
    }

    setTodo(todoList){
        this.todoList.push(todoList);
    }

    getTodo(todoId){
        return this.todoList.find((todo) => todo.getId() === todoId);
    }

    addTask(newTask){
        this.addTask.push(newTask);
    }

    deleteTask(todoId){
        this.todoList = this.task.filter((todo) => todo.getId() === todoId);
    }

    
}