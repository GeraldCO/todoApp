import projecsMenuUI from './views/ProjectsMenuUI';
import mainDiv from './views/mainDiv';
import loadProjects from './controllers/ProjectsListController';
import modalNewProject from './views/modalNewProject';
import todoElement from './views/todoELement';


function component(){
    const element = document.createElement('div');   
    element.append(projecsMenuUI(), mainDiv(), modalNewProject());
    return element;
}

document.querySelector('#content').append(component());
const myLoadProjects = new loadProjects();
myLoadProjects.loadProjects();   

const createProjectButton = document.querySelector('.modal-new-project');
createProjectButton.addEventListener('click', (e)=>myLoadProjects.newProjectCreation());

const openProjectButtons = document.querySelectorAll('.open');
openProjectButtons.forEach(item =>{
    item.addEventListener('click', (e)=>myLoadProjects.openProject(e.target.value));
});

const deleteProjectButtons = document.querySelectorAll('.delete');
deleteProjectButtons.forEach( item => {
    item.addEventListener('click', (e)=>myLoadProjects.deleteProject(e.target.value));
})