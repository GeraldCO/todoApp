export default function ProjectElement (projectNameValue, projectIdValue){
    const projectElement = document.createElement('div');
    const projectNameDiv = document.createElement('div');
    const projectName = document.createElement('h2');
    const projectOptions = document.createElement('div');
    const buttonOpen = document.createElement('button');
    const buttonDelete = document.createElement('button');

    projectName.classList.add('project-name-div');
    buttonDelete.classList.add('button', 'delete');
    buttonOpen.classList.add('open', 'button');

    buttonDelete.innerText = 'X';
    buttonOpen.innerText = 'Open';


    projectName.innerText = projectNameValue;
    buttonDelete.value = projectIdValue;
    buttonOpen.value = projectIdValue;
    projectNameDiv.append(projectName);
    projectOptions.append(buttonDelete, buttonOpen);


    projectElement.append(projectNameDiv, projectOptions);
    return projectElement;
}