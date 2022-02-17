/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/controllers/ProjectsListController.js":
/*!***************************************************!*\
  !*** ./src/controllers/ProjectsListController.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectsListController)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module '../models/Projects'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _models_ProjectsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/ProjectsList */ "./src/models/ProjectsList.js");
/* harmony import */ var _models_Todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/Todo */ "./src/models/Todo.js");
/* harmony import */ var _views_ProjectElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../views/ProjectElement */ "./src/views/ProjectElement.js");





class ProjectsListController{
    constructor(){
        this.Todo1 = new _models_Todo__WEBPACK_IMPORTED_MODULE_2__["default"](1, 'todo 1', 'todo1 description', 'today', 'high', true);
        this.Todo2 = new _models_Todo__WEBPACK_IMPORTED_MODULE_2__["default"](2, 'todo 2', 'todo2 description', 'tomoorrow', 'low', true);
        this.Project1 = new Object(function webpackMissingModule() { var e = new Error("Cannot find module '../models/Projects'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(5, 'this is project number 1', [this.Todo1, this.Todo2]);
        this.Project2 = new Object(function webpackMissingModule() { var e = new Error("Cannot find module '../models/Projects'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(6, 'project 2 description', [this.Todo2, this.Todo1]);
        this.MyProjectsList = new _models_ProjectsList__WEBPACK_IMPORTED_MODULE_1__["default"];
        this.MyProjectsList.setProjects([this.Project1, this.Project2]);
    }
    openProject(projectId){
        var selectedProject =  this.MyProjectsList.getProject(projectId);
        currentProjectDiv.innerText = selectedProject.project.name;
        var todos = {[1]:['id', 'task name', 'date'], [2]:['id2', 'task name2', 'date2'], [3]:['id3', 'task name3', 'date3']};
        selectedProject.project.todoList = todos;
        todoListDiv.append(myTodoElement.createTodoElement());
    }
    
    loadProjects(){
            const projectsListDiv = document.querySelector('#projects-list-div');
            Object.entries(this.MyProjectsList.getProjects()).map(item => {
                projectsListDiv.append((0,_views_ProjectElement__WEBPACK_IMPORTED_MODULE_3__["default"])(item[1].name, item[1].id));
            });
    }

    newProjectCreation(){ 
        const inputNewProject = document.querySelector('.input-new-project-name');
        var lastID = parseInt(localStorage.lastID);  //move it later to storage
        const newProject = new Object(function webpackMissingModule() { var e = new Error("Cannot find module '../models/Projects'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())(lastID, inputNewProject.value,[]);
        this.MyProjectsList.addProject(newProject);
        localStorage.lastID = lastID+1;
        console.log(this.MyProjectsList);
        const projectsListDiv = document.querySelector('#projects-list-div');
        projectsListDiv.append((0,_views_ProjectElement__WEBPACK_IMPORTED_MODULE_3__["default"])(newProject.name, newProject.id));
    }

    
}

/***/ }),

/***/ "./src/models/ProjectsList.js":
/*!************************************!*\
  !*** ./src/models/ProjectsList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectList)
/* harmony export */ });
class ProjectList{
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
        this.projects.find((project)=> project.getId === projectId);
    }

    addProject(newProject){
        this.projects.push(newProject);
    }

    deleteProject(projectId){
        const projectToDelete = this.projects.find(project => project.id === projectId);
        this.projects.splice(this.projects.indexOf(projectToDelete), 1);
    }
}

/***/ }),

/***/ "./src/models/Todo.js":
/*!****************************!*\
  !*** ./src/models/Todo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
class Todo{
    constructor(id, title, description, duaDate, priority, completed){
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = duaDate;
        this.priority = priority; 
        this.completed = completed;
    }

    getId(){
        return this.id;
    }

    setId(value){
        this.id = value;
    }

    getTitle(){
        return this.title;
    }

    setTitle(value){
        this.title = value;
    }

    getDescription(){
        return this.description();
    }

    setDescription(value){
        this.description = value;
    }

    getDueDate(){
        return this.dueDate;
    }

    setDueDate(value){
        this.dueDate = value
    }

    getPriority(){
        return this.priority();
    }

    setPriority(value){
        this.priority = value;
    }

    getCompleted(){
        return this.completed;
    }

    setCompleted(value){
        this.completed = value;
    }

    getDateFormatted() {
        const day = this.dueDate.split('/')[0]
        const month = this.dueDate.split('/')[1]
        const year = this.dueDate.split('/')[2]
        return `${month}/${day}/${year}`
    }
}

/***/ }),

/***/ "./src/views/ProjectElement.js":
/*!*************************************!*\
  !*** ./src/views/ProjectElement.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProjectElement)
/* harmony export */ });
function ProjectElement (projectNameValue, projectIdValue){
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

/***/ }),

/***/ "./src/views/ProjectsMenuUI.js":
/*!*************************************!*\
  !*** ./src/views/ProjectsMenuUI.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProjectsMenu);

/***/ }),

/***/ "./src/views/mainDiv.js":
/*!******************************!*\
  !*** ./src/views/mainDiv.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMain);

/***/ }),

/***/ "./src/views/modalNewProject.js":
/*!**************************************!*\
  !*** ./src/views/modalNewProject.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalNewProject);

/***/ }),

/***/ "./src/views/todoELement.js":
/*!**********************************!*\
  !*** ./src/views/todoELement.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ todoElement)
/* harmony export */ });
class todoElement{
    
    constructor(Title, DueDate, Id){
        this.Title = Title;
        this.DueDate = DueDate;
        this.Id = Id;
    }

    createTodoElement(){
        const todoListContainer = document.createElement('div');
        const todoTitleH3 = document.createElement('h3');
        const todoDueDateh3 = document.createElement('h5');
        const divTodoOptions = document.createElement('div');
        const buttonCompletedTodo = document.createElement('button');
        const buttonDeleteTodo = document.createElement('button');

        buttonCompletedTodo.innerHTML = 'Completed';
        buttonDeleteTodo.innerText = 'Delete';

        buttonCompletedTodo.value = this.Id;
        buttonDeleteTodo.value = this.Id;
        todoTitleH3.innerText = this.Title;
        todoDueDateh3.innerText = this.DueDate;

        todoListContainer.append(todoTitleH3, todoDueDateh3, divTodoOptions);
        divTodoOptions.append(buttonCompletedTodo, buttonDeleteTodo);

        return todoListContainer;
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_ProjectsMenuUI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/ProjectsMenuUI */ "./src/views/ProjectsMenuUI.js");
/* harmony import */ var _views_mainDiv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/mainDiv */ "./src/views/mainDiv.js");
/* harmony import */ var _controllers_ProjectsListController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers/ProjectsListController */ "./src/controllers/ProjectsListController.js");
/* harmony import */ var _views_modalNewProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/modalNewProject */ "./src/views/modalNewProject.js");
/* harmony import */ var _views_todoELement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/todoELement */ "./src/views/todoELement.js");







function component(){
    const element = document.createElement('div');   
    element.append((0,_views_ProjectsMenuUI__WEBPACK_IMPORTED_MODULE_0__["default"])(), (0,_views_mainDiv__WEBPACK_IMPORTED_MODULE_1__["default"])(), (0,_views_modalNewProject__WEBPACK_IMPORTED_MODULE_3__["default"])());
    return element;
}

document.querySelector('#content').append(component());
const myLoadProjects = new _controllers_ProjectsListController__WEBPACK_IMPORTED_MODULE_2__["default"]();
myLoadProjects.loadProjects();   

const createProjectButton = document.querySelector('.modal-new-project');
createProjectButton.addEventListener('click', (e)=>myLoadProjects.newProjectCreation());
const myTodoElement = new _views_todoELement__WEBPACK_IMPORTED_MODULE_4__["default"]('gato', 'gato2', 5);

const currentProjectDiv = document.querySelector('.current-project');
const openProjectButtons = document.querySelectorAll('.open');
const todoListDiv = document.querySelector('.todo-list');
openProjectButtons.forEach(item =>{
    item.addEventListener('click', (e)=>console.log(console.log('it works')));
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ1I7OztBQUc5QztBQUNBO0FBQ0EsbUJBQW1CLGlFQUFhLElBQUksMERBQU8sSUFBSSxrRUFBZTtBQUM5RDtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLDJFQUFZO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEIsMERBQVc7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL2NvbnRyb2xsZXJzL1Byb2plY3RzTGlzdENvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9tb2RlbHMvUHJvamVjdHNMaXN0LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvbW9kZWxzL1RvZG8uanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy92aWV3cy9Qcm9qZWN0RWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3ZpZXdzL1Byb2plY3RzTWVudVVJLmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdmlld3MvbWFpbkRpdi5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3ZpZXdzL21vZGFsTmV3UHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3ZpZXdzL3RvZG9FTGVtZW50LmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9qZWN0IGZyb20gJy4uL21vZGVscy9Qcm9qZWN0cyc7XG5pbXBvcnQgUHJvamVjdExpc3QgZnJvbSAnLi4vbW9kZWxzL1Byb2plY3RzTGlzdCc7XG5pbXBvcnQgVG9kbyBmcm9tICcuLi9tb2RlbHMvVG9kbyc7XG5pbXBvcnQgUHJvamVjdEVsZW1lbnQgZnJvbSAnLi4vdmlld3MvUHJvamVjdEVsZW1lbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0c0xpc3RDb250cm9sbGVye1xuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIHRoaXMuVG9kbzEgPSBuZXcgVG9kbygxLCAndG9kbyAxJywgJ3RvZG8xIGRlc2NyaXB0aW9uJywgJ3RvZGF5JywgJ2hpZ2gnLCB0cnVlKTtcbiAgICAgICAgdGhpcy5Ub2RvMiA9IG5ldyBUb2RvKDIsICd0b2RvIDInLCAndG9kbzIgZGVzY3JpcHRpb24nLCAndG9tb29ycm93JywgJ2xvdycsIHRydWUpO1xuICAgICAgICB0aGlzLlByb2plY3QxID0gbmV3IFByb2plY3QoNSwgJ3RoaXMgaXMgcHJvamVjdCBudW1iZXIgMScsIFt0aGlzLlRvZG8xLCB0aGlzLlRvZG8yXSk7XG4gICAgICAgIHRoaXMuUHJvamVjdDIgPSBuZXcgUHJvamVjdCg2LCAncHJvamVjdCAyIGRlc2NyaXB0aW9uJywgW3RoaXMuVG9kbzIsIHRoaXMuVG9kbzFdKTtcbiAgICAgICAgdGhpcy5NeVByb2plY3RzTGlzdCA9IG5ldyBQcm9qZWN0TGlzdDtcbiAgICAgICAgdGhpcy5NeVByb2plY3RzTGlzdC5zZXRQcm9qZWN0cyhbdGhpcy5Qcm9qZWN0MSwgdGhpcy5Qcm9qZWN0Ml0pO1xuICAgIH1cbiAgICBvcGVuUHJvamVjdChwcm9qZWN0SWQpe1xuICAgICAgICB2YXIgc2VsZWN0ZWRQcm9qZWN0ID0gIHRoaXMuTXlQcm9qZWN0c0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0SWQpO1xuICAgICAgICBjdXJyZW50UHJvamVjdERpdi5pbm5lclRleHQgPSBzZWxlY3RlZFByb2plY3QucHJvamVjdC5uYW1lO1xuICAgICAgICB2YXIgdG9kb3MgPSB7WzFdOlsnaWQnLCAndGFzayBuYW1lJywgJ2RhdGUnXSwgWzJdOlsnaWQyJywgJ3Rhc2sgbmFtZTInLCAnZGF0ZTInXSwgWzNdOlsnaWQzJywgJ3Rhc2sgbmFtZTMnLCAnZGF0ZTMnXX07XG4gICAgICAgIHNlbGVjdGVkUHJvamVjdC5wcm9qZWN0LnRvZG9MaXN0ID0gdG9kb3M7XG4gICAgICAgIHRvZG9MaXN0RGl2LmFwcGVuZChteVRvZG9FbGVtZW50LmNyZWF0ZVRvZG9FbGVtZW50KCkpO1xuICAgIH1cbiAgICBcbiAgICBsb2FkUHJvamVjdHMoKXtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RzTGlzdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0cy1saXN0LWRpdicpO1xuICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5NeVByb2plY3RzTGlzdC5nZXRQcm9qZWN0cygpKS5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgcHJvamVjdHNMaXN0RGl2LmFwcGVuZChQcm9qZWN0RWxlbWVudChpdGVtWzFdLm5hbWUsIGl0ZW1bMV0uaWQpKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5ld1Byb2plY3RDcmVhdGlvbigpeyBcbiAgICAgICAgY29uc3QgaW5wdXROZXdQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlucHV0LW5ldy1wcm9qZWN0LW5hbWUnKTtcbiAgICAgICAgdmFyIGxhc3RJRCA9IHBhcnNlSW50KGxvY2FsU3RvcmFnZS5sYXN0SUQpOyAgLy9tb3ZlIGl0IGxhdGVyIHRvIHN0b3JhZ2VcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KGxhc3RJRCwgaW5wdXROZXdQcm9qZWN0LnZhbHVlLFtdKTtcbiAgICAgICAgdGhpcy5NeVByb2plY3RzTGlzdC5hZGRQcm9qZWN0KG5ld1Byb2plY3QpO1xuICAgICAgICBsb2NhbFN0b3JhZ2UubGFzdElEID0gbGFzdElEKzE7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuTXlQcm9qZWN0c0xpc3QpO1xuICAgICAgICBjb25zdCBwcm9qZWN0c0xpc3REaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdHMtbGlzdC1kaXYnKTtcbiAgICAgICAgcHJvamVjdHNMaXN0RGl2LmFwcGVuZChQcm9qZWN0RWxlbWVudChuZXdQcm9qZWN0Lm5hbWUsIG5ld1Byb2plY3QuaWQpKTtcbiAgICB9XG5cbiAgICBcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0TGlzdHtcbiAgICBjb25zdHJ1Y3Rvcigpe1xuICAgICAgICB0aGlzLnByb2plY3RzID0gW107XG4gICAgfVxuXG4gICAgc2V0UHJvamVjdHMocHJvamVjdHMpe1xuICAgICAgICB0aGlzLnByb2plY3RzID0gcHJvamVjdHM7XG4gICAgfVxuXG4gICAgZ2V0UHJvamVjdHMoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHM7XG4gICAgfVxuXG4gICAgZ2V0UHJvamVjdChwcm9qZWN0SWQpe1xuICAgICAgICB0aGlzLnByb2plY3RzLmZpbmQoKHByb2plY3QpPT4gcHJvamVjdC5nZXRJZCA9PT0gcHJvamVjdElkKTtcbiAgICB9XG5cbiAgICBhZGRQcm9qZWN0KG5ld1Byb2plY3Qpe1xuICAgICAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XG4gICAgfVxuXG4gICAgZGVsZXRlUHJvamVjdChwcm9qZWN0SWQpe1xuICAgICAgICBjb25zdCBwcm9qZWN0VG9EZWxldGUgPSB0aGlzLnByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0LmlkID09PSBwcm9qZWN0SWQpO1xuICAgICAgICB0aGlzLnByb2plY3RzLnNwbGljZSh0aGlzLnByb2plY3RzLmluZGV4T2YocHJvamVjdFRvRGVsZXRlKSwgMSk7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG97XG4gICAgY29uc3RydWN0b3IoaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVhRGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlZCl7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1YURhdGU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTsgXG4gICAgICAgIHRoaXMuY29tcGxldGVkID0gY29tcGxldGVkO1xuICAgIH1cblxuICAgIGdldElkKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmlkO1xuICAgIH1cblxuICAgIHNldElkKHZhbHVlKXtcbiAgICAgICAgdGhpcy5pZCA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldFRpdGxlKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICAgIH1cblxuICAgIHNldFRpdGxlKHZhbHVlKXtcbiAgICAgICAgdGhpcy50aXRsZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldERlc2NyaXB0aW9uKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uKCk7XG4gICAgfVxuXG4gICAgc2V0RGVzY3JpcHRpb24odmFsdWUpe1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0RHVlRGF0ZSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5kdWVEYXRlO1xuICAgIH1cblxuICAgIHNldER1ZURhdGUodmFsdWUpe1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSB2YWx1ZVxuICAgIH1cblxuICAgIGdldFByaW9yaXR5KCl7XG4gICAgICAgIHJldHVybiB0aGlzLnByaW9yaXR5KCk7XG4gICAgfVxuXG4gICAgc2V0UHJpb3JpdHkodmFsdWUpe1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gdmFsdWU7XG4gICAgfVxuXG4gICAgZ2V0Q29tcGxldGVkKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlZDtcbiAgICB9XG5cbiAgICBzZXRDb21wbGV0ZWQodmFsdWUpe1xuICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IHZhbHVlO1xuICAgIH1cblxuICAgIGdldERhdGVGb3JtYXR0ZWQoKSB7XG4gICAgICAgIGNvbnN0IGRheSA9IHRoaXMuZHVlRGF0ZS5zcGxpdCgnLycpWzBdXG4gICAgICAgIGNvbnN0IG1vbnRoID0gdGhpcy5kdWVEYXRlLnNwbGl0KCcvJylbMV1cbiAgICAgICAgY29uc3QgeWVhciA9IHRoaXMuZHVlRGF0ZS5zcGxpdCgnLycpWzJdXG4gICAgICAgIHJldHVybiBgJHttb250aH0vJHtkYXl9LyR7eWVhcn1gXG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RFbGVtZW50IChwcm9qZWN0TmFtZVZhbHVlLCBwcm9qZWN0SWRWYWx1ZSl7XG4gICAgY29uc3QgcHJvamVjdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBwcm9qZWN0TmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBwcm9qZWN0T3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJ1dHRvbk9wZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBidXR0b25EZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIHByb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbmFtZS1kaXYnKTtcbiAgICBidXR0b25EZWxldGUuY2xhc3NMaXN0LmFkZCgnYnV0dG9uJywgJ2RlbGV0ZScpO1xuICAgIGJ1dHRvbk9wZW4uY2xhc3NMaXN0LmFkZCgnb3BlbicsICdidXR0b24nKTtcblxuICAgIGJ1dHRvbkRlbGV0ZS5pbm5lclRleHQgPSAnWCc7XG4gICAgYnV0dG9uT3Blbi5pbm5lclRleHQgPSAnT3Blbic7XG5cblxuICAgIHByb2plY3ROYW1lLmlubmVyVGV4dCA9IHByb2plY3ROYW1lVmFsdWU7XG4gICAgYnV0dG9uRGVsZXRlLnZhbHVlID0gcHJvamVjdElkVmFsdWU7XG4gICAgYnV0dG9uT3Blbi52YWx1ZSA9IHByb2plY3RJZFZhbHVlO1xuICAgIHByb2plY3ROYW1lRGl2LmFwcGVuZChwcm9qZWN0TmFtZSk7XG4gICAgcHJvamVjdE9wdGlvbnMuYXBwZW5kKGJ1dHRvbkRlbGV0ZSwgYnV0dG9uT3Blbik7XG5cblxuICAgIHByb2plY3RFbGVtZW50LmFwcGVuZChwcm9qZWN0TmFtZURpdiwgcHJvamVjdE9wdGlvbnMpO1xuICAgIHJldHVybiBwcm9qZWN0RWxlbWVudDtcbn0iLCJmdW5jdGlvbiBjcmVhdGVQcm9qZWN0c01lbnUoKXtcbiAgICBjb25zdCBwcm9qZWN0c01lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgY29uc3QgaDJwcm9qZWN0c01lbnVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBuZXdQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgdGl0bGVQcm9qZWN0TGlzdGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjb25zdCBwcm9qZWN0TGlzdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgcHJvamVjdHNNZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RzLW1lbnUtY29udGFpbmVyJyk7XG4gICAgaDJwcm9qZWN0c01lbnVUaXRsZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cy1tZW51LXRpdGxlJyk7XG4gICAgY3VycmVudFByb2plY3QuY2xhc3NMaXN0LmFkZCgnY3VycmVudC1wcm9qZWN0Jyk7XG4gICAgbmV3UHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCduZXctcHJvamVjdC1idXR0b24nKTtcbiAgICB0aXRsZVByb2plY3RMaXN0aDMuY2xhc3NMaXN0LmFkZCgndGl0bGUtcHJvamVjdC1saXN0Jyk7XG4gICAgcHJvamVjdExpc3REaXYuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0cy1saXN0LWRpdicpO1xuXG4gICAgaDJwcm9qZWN0c01lbnVUaXRsZS5pbm5lclRleHQgPSAnUHJvamVjdHMnO1xuICAgIGN1cnJlbnRQcm9qZWN0LmlubmVyVGV4dCA9ICdDdXJyZW50IHByb2plY3QgZGlzcGF0Y2hFdmVudCc7XG4gICAgbmV3UHJvamVjdEJ1dHRvbi5pbm5lclRleHQgPSAnTmV3IFByb2plY3QnO1xuICAgIHRpdGxlUHJvamVjdExpc3RoMy5pbm5lclRleHQgPSAnUHJvamVjdCBMaXN0JztcbiAgICBwcm9qZWN0TGlzdERpdi5pbm5lclRleHQgPSAnUHJvamVjdCBMaXN0IERpdic7XG5cbiAgICBwcm9qZWN0c01lbnVDb250YWluZXIuYXBwZW5kKGgycHJvamVjdHNNZW51VGl0bGUsIGN1cnJlbnRQcm9qZWN0LCBuZXdQcm9qZWN0QnV0dG9uLCB0aXRsZVByb2plY3RMaXN0aDMsIHByb2plY3RMaXN0RGl2KTtcblxuICAgIHJldHVybiBwcm9qZWN0c01lbnVDb250YWluZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVByb2plY3RzTWVudTsiLCJmdW5jdGlvbiBjcmVhdGVNYWluKCl7XG4gICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBhZGRUb2RvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ2gyJyk7XG4gICAgYWRkVG9kb0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGQtdG9kby1idXR0b24nKTtcbiAgICB0b2RvTGlzdC5jbGFzc0xpc3QuYWRkKCd0b2RvLWxpc3QnKTtcblxuICAgIHRpdGxlLmlubmVyVGV4dCA9ICdDdXJyZW50IFByb2plY3QgVE9ETyBMaXN0JztcbiAgICBhZGRUb2RvQnV0dG9uLmlubmVyVGV4dCA9ICcrJztcblxuICAgIG1haW5EaXYuYXBwZW5kKHRpdGxlLCBhZGRUb2RvQnV0dG9uLCB0b2RvTGlzdCk7XG4gICAgcmV0dXJuIG1haW5EaXY7XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNYWluOyIsImZ1bmN0aW9uIG1vZGFsTmV3UHJvamVjdCgpe1xuICAgIGNvbnN0IG5ld1Byb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgY29uc3QgbmV3UHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjb25zdCBuZXdQcm9qZWN0Rm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGxhYmVsTmV3UHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGNvbnN0IGlucHV0TmV3UHJvamVjdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IGJ1dHRvbkNyZWF0ZU5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBidXR0b25DYW5jZWxOZXdQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgYnV0dG9uc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgbmV3UHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWxpc3QtY29udGFpbmVyJyk7XG4gICAgbmV3UHJvamVjdFRpdGxlLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtdGl0bGUnKTtcbiAgICBuZXdQcm9qZWN0Rm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdmb3JtLWNvbnRhaW5lcicpO1xuICAgIGxhYmVsTmV3UHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZCgnbGFiZWwtbmV3LXByb2plY3QtbmFtZScpO1xuICAgIGlucHV0TmV3UHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZCgnaW5wdXQtbmV3LXByb2plY3QtbmFtZScpO1xuICAgIGJ1dHRvbnNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbW9kYWwtYnV0dG9ucy1jb250YWluZXInKTsgICAgXG4gICAgYnV0dG9uQ3JlYXRlTmV3UHJvamVjdC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1uZXctcHJvamVjdCcpO1xuICAgIGJ1dHRvbkNhbmNlbE5ld1Byb2plY3QuY2xhc3NMaXN0LmFkZCgnbW9kYWwtY2FuY2VsLW5ldy1wcm9qZWN0Jyk7XG5cbiAgICBcbiAgICBuZXdQcm9qZWN0VGl0bGUuaW5uZXJUZXh0ID0gJ05ldyBQcm9qZWN0JztcbiAgICBsYWJlbE5ld1Byb2plY3ROYW1lLmlubmVyVGV4dCA9ICdQcm9qZWN0IE5hbWUnO1xuICAgIGJ1dHRvbkNhbmNlbE5ld1Byb2plY3QuaW5uZXJUZXh0ID0gJ0NhbmNlbCc7XG4gICAgYnV0dG9uQ3JlYXRlTmV3UHJvamVjdC5pbm5lclRleHQgPSAnQ3JlYXRlJztcblxuICAgIGJ1dHRvbnNDb250YWluZXIuYXBwZW5kKGJ1dHRvbkNyZWF0ZU5ld1Byb2plY3QsIGJ1dHRvbkNhbmNlbE5ld1Byb2plY3QpO1xuICAgIG5ld1Byb2plY3RGb3JtQ29udGFpbmVyLmFwcGVuZChsYWJlbE5ld1Byb2plY3ROYW1lLCBpbnB1dE5ld1Byb2plY3ROYW1lKTtcblxuICAgIG5ld1Byb2plY3RDb250YWluZXIuYXBwZW5kKG5ld1Byb2plY3RUaXRsZSwgbmV3UHJvamVjdEZvcm1Db250YWluZXIsIGJ1dHRvbnNDb250YWluZXIpO1xuXG4gICAgcmV0dXJuIG5ld1Byb2plY3RDb250YWluZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG1vZGFsTmV3UHJvamVjdDsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyB0b2RvRWxlbWVudHtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihUaXRsZSwgRHVlRGF0ZSwgSWQpe1xuICAgICAgICB0aGlzLlRpdGxlID0gVGl0bGU7XG4gICAgICAgIHRoaXMuRHVlRGF0ZSA9IER1ZURhdGU7XG4gICAgICAgIHRoaXMuSWQgPSBJZDtcbiAgICB9XG5cbiAgICBjcmVhdGVUb2RvRWxlbWVudCgpe1xuICAgICAgICBjb25zdCB0b2RvTGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCB0b2RvVGl0bGVIMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgIGNvbnN0IHRvZG9EdWVEYXRlaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNScpO1xuICAgICAgICBjb25zdCBkaXZUb2RvT3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBidXR0b25Db21wbGV0ZWRUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNvbnN0IGJ1dHRvbkRlbGV0ZVRvZG8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICBidXR0b25Db21wbGV0ZWRUb2RvLmlubmVySFRNTCA9ICdDb21wbGV0ZWQnO1xuICAgICAgICBidXR0b25EZWxldGVUb2RvLmlubmVyVGV4dCA9ICdEZWxldGUnO1xuXG4gICAgICAgIGJ1dHRvbkNvbXBsZXRlZFRvZG8udmFsdWUgPSB0aGlzLklkO1xuICAgICAgICBidXR0b25EZWxldGVUb2RvLnZhbHVlID0gdGhpcy5JZDtcbiAgICAgICAgdG9kb1RpdGxlSDMuaW5uZXJUZXh0ID0gdGhpcy5UaXRsZTtcbiAgICAgICAgdG9kb0R1ZURhdGVoMy5pbm5lclRleHQgPSB0aGlzLkR1ZURhdGU7XG5cbiAgICAgICAgdG9kb0xpc3RDb250YWluZXIuYXBwZW5kKHRvZG9UaXRsZUgzLCB0b2RvRHVlRGF0ZWgzLCBkaXZUb2RvT3B0aW9ucyk7XG4gICAgICAgIGRpdlRvZG9PcHRpb25zLmFwcGVuZChidXR0b25Db21wbGV0ZWRUb2RvLCBidXR0b25EZWxldGVUb2RvKTtcblxuICAgICAgICByZXR1cm4gdG9kb0xpc3RDb250YWluZXI7XG4gICAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgcHJvamVjc01lbnVVSSBmcm9tICcuL3ZpZXdzL1Byb2plY3RzTWVudVVJJztcbmltcG9ydCBtYWluRGl2IGZyb20gJy4vdmlld3MvbWFpbkRpdic7XG5pbXBvcnQgbG9hZFByb2plY3RzIGZyb20gJy4vY29udHJvbGxlcnMvUHJvamVjdHNMaXN0Q29udHJvbGxlcic7XG5pbXBvcnQgbW9kYWxOZXdQcm9qZWN0IGZyb20gJy4vdmlld3MvbW9kYWxOZXdQcm9qZWN0JztcbmltcG9ydCB0b2RvRWxlbWVudCBmcm9tICcuL3ZpZXdzL3RvZG9FTGVtZW50JztcblxuXG5mdW5jdGlvbiBjb21wb25lbnQoKXtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7ICAgXG4gICAgZWxlbWVudC5hcHBlbmQocHJvamVjc01lbnVVSSgpLCBtYWluRGl2KCksIG1vZGFsTmV3UHJvamVjdCgpKTtcbiAgICByZXR1cm4gZWxlbWVudDtcbn1cblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKS5hcHBlbmQoY29tcG9uZW50KCkpO1xuY29uc3QgbXlMb2FkUHJvamVjdHMgPSBuZXcgbG9hZFByb2plY3RzKCk7XG5teUxvYWRQcm9qZWN0cy5sb2FkUHJvamVjdHMoKTsgICBcblxuY29uc3QgY3JlYXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1uZXctcHJvamVjdCcpO1xuY3JlYXRlUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+bXlMb2FkUHJvamVjdHMubmV3UHJvamVjdENyZWF0aW9uKCkpO1xuY29uc3QgbXlUb2RvRWxlbWVudCA9IG5ldyB0b2RvRWxlbWVudCgnZ2F0bycsICdnYXRvMicsIDUpO1xuXG5jb25zdCBjdXJyZW50UHJvamVjdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXByb2plY3QnKTtcbmNvbnN0IG9wZW5Qcm9qZWN0QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5vcGVuJyk7XG5jb25zdCB0b2RvTGlzdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWxpc3QnKTtcbm9wZW5Qcm9qZWN0QnV0dG9ucy5mb3JFYWNoKGl0ZW0gPT57XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+Y29uc29sZS5sb2coY29uc29sZS5sb2coJ2l0IHdvcmtzJykpKTtcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==