export default class ProjectList{
    constructor(){
        this.projects = [];
    }

    setProjects(projects){
        this.projects = projects;
    }

    getProjects(){
        return this.projects;
    }

    getProject(projectId){
        //console.log(typeof parseInt(projectId));
        return this.projects.find(project => project.id === parseInt(projectId));
    }

    addProject(newProject){
        this.projects.push(newProject);
    }

    deleteProject(projectId){
        const projectToDelete = this.projects.find(project => project.id === parseInt(projectId));
        this.projects.splice(this.projects.indexOf(projectToDelete), 1);
    }
}