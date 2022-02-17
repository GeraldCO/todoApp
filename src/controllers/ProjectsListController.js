import Project from '../models/Project';
import ProjectList from '../models/ProjectsList';
import Todo from '../models/Todo';
import ProjectElement from '../views/ProjectElement';
import TodoElement from '../views/todoELement';


export default class ProjectsListController{
    constructor(){
        this.Todo1 = new Todo(1, 'todo 1', 'todo1 description', 'today', 'high', true);
        this.Todo2 = new Todo(2, 'todo 2', 'todo2 description', 'tomoorrow', 'low', true);
        this.Project1 = new Project(5, 'this is project number 1', [this.Todo1, this.Todo2]);
        this.Project2 = new Project(6, 'project 2 description', [this.Todo2, this.Todo1]);
        this.MyProjectsList = new ProjectList;
        this.MyProjectsList.setProjects([this.Project1, this.Project2]);
    }
    
    loadProjects(){
            const projectsListDiv = document.querySelector('#projects-list-div');
            Object.entries(this.MyProjectsList.getProjects()).map(item => {
                projectsListDiv.append(ProjectElement(item[1].name, item[1].id));
            });
    }

    newProjectCreation(){ 
        const inputNewProject = document.querySelector('.input-new-project-name');
        var lastID = parseInt(localStorage.lastID);  //move it later to storage
        const newProject = new Project(lastID, inputNewProject.value,[]);
        this.MyProjectsList.addProject(newProject);
        localStorage.lastID = lastID+1;
        console.log(this.MyProjectsList);
        const projectsListDiv = document.querySelector('#projects-list-div');
        projectsListDiv.append(ProjectElement(newProject.name, newProject.id));
    }

    openProject(projectId){
        const todoListDiv = document.querySelector('.todo-list');
        const currentProjectDiv = document.querySelector('.current-project');
        //var selectedProject = this.MyProjectsList.projects.find(element => element.getId() == projectId );
        var selectedProject = this.MyProjectsList.getProject(projectId);
        currentProjectDiv.innerText = selectedProject.name;
        selectedProject.innerText = '';
        selectedProject.todoList.forEach(element => {
            const newTodoElement = new TodoElement(element);
            todoListDiv.append(newTodoElement.createElement());
        });
    }

    deleteProject(projectId){
        const todoListDiv = document.querySelector('.todo-list');
        const currentProjectDiv = document.querySelector('.current-project');
        var selectedProject = this.MyProjectsList.projects.find(element => element.getId() == projectId );
        console.log(JSON.stringify(this.MyProjectsList) + 'before delete');
        this.MyProjectsList.deleteProject(projectId);
        console.log(JSON.stringify(this.MyProjectsList) + 'after delete');
        const projectsListDiv = document.querySelector('#projects-list-div');
        projectsListDiv.innerText = "";
        this.loadProjects();
    }
}