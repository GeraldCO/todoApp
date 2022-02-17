function createProjectsMenu(){
    const projectsMenuContainer = document.createElement('section');
    const h2projectsMenuTitle = document.createElement('h2');
    const currentProject = document.createElement('div');
    const newProjectButton = document.createElement('button');
    const titleProjectListh3 = document.createElement('h3');
    const projectListDiv = document.createElement('div');

    projectsMenuContainer.classList.add('projects-menu-container');
    h2projectsMenuTitle.classList.add('projects-menu-title');
    currentProject.classList.add('current-project');
    newProjectButton.classList.add('new-project-button');
    titleProjectListh3.classList.add('title-project-list');
    projectListDiv.setAttribute('id', 'projects-list-div');

    h2projectsMenuTitle.innerText = 'Projects';
    currentProject.innerText = 'Current project dispatchEvent';
    newProjectButton.innerText = 'New Project';
    titleProjectListh3.innerText = 'Project List';
    projectListDiv.innerText = 'Project List Div';

    projectsMenuContainer.append(h2projectsMenuTitle, currentProject, newProjectButton, titleProjectListh3, projectListDiv);

    return projectsMenuContainer;
}

export default createProjectsMenu;