import Project from "../models/Projects";
import ProjectList from "../models/ProjectsList";
import Todo from "../models/Todo";

export default class Storage {
    static saveProjectsList(projects){
        localStorage.setItem('Projects', JSON.stringify(projects));
    }


    static listOfProjects(){
        const existingProjects = Object.assign(
            new ProjectList(),
            JSON.parse(localStorage.getItem("Projects"))
        );

        existingProjects.setProjects(
            existingProjects
            .getProjects()
            .map((project) => Object.assign(new Project(), project))
        );

        existingProjects.
            getProjects()
            .forEach((project) => 
              project.setTodo(
                project.getProjects().map((todo) => Object.assign(new Todo, todo))
            )
        )

        return existingProjects;
    }

    static addProject(project){
        const existingProjects = Storage.listOfProjects();
        existingProjects.addProject(project);
        Storage.saveProjectsList(existingProjects);
    }

    static deleteProject(project){
        const existingProjects = Storage.listOfProjects();
        existingProjects.deleteProject(project);
        Storage.saveProjectsList(existingProjects);
    }

    static addTodo(projectId, todo){
        const existingProjects = Storage.listOfProjects();
        existingProjects.getProject(projectId).addTodo(todo);
        Storage.saveProjectsList(existingProjects);        
    }

    static deleteTodo(projectId, todoId){
        const todoList = this.listOfProjects();
        todoList.getProject(projectId).deleteTodo(todoId);
        Storage.saveProjectsList(existingProjects)
    }   
}