function modalNewProject(){
    const newProjectContainer = document.createElement('div'); 
    const newProjectTitle = document.createElement('h3');
    const newProjectFormContainer = document.createElement('div');
    const labelNewProjectName = document.createElement('label');
    const inputNewProjectName = document.createElement('input');
    const buttonCreateNewProject = document.createElement('button');
    const buttonCancelNewProject = document.createElement('button');
    const buttonsContainer = document.createElement('div');

    newProjectContainer.classList.add('project-list-container');
    newProjectTitle.classList.add('project-title');
    newProjectFormContainer.classList.add('form-container');
    labelNewProjectName.classList.add('label-new-project-name');
    inputNewProjectName.classList.add('input-new-project-name');
    buttonsContainer.classList.add('modal-buttons-container');    
    buttonCreateNewProject.classList.add('modal-new-project');
    buttonCancelNewProject.classList.add('modal-cancel-new-project');

    
    newProjectTitle.innerText = 'New Project';
    labelNewProjectName.innerText = 'Project Name';
    buttonCancelNewProject.innerText = 'Cancel';
    buttonCreateNewProject.innerText = 'Create';

    buttonsContainer.append(buttonCreateNewProject, buttonCancelNewProject);
    newProjectFormContainer.append(labelNewProjectName, inputNewProjectName);

    newProjectContainer.append(newProjectTitle, newProjectFormContainer, buttonsContainer);

    return newProjectContainer;
}

export default modalNewProject;