export default class newTodo{
    constructor(){
        this.titleInput = document.createElement('input');;
        this.dueDateInput = document.createElement('input');;
        this.descriptionTextArea =  document.createElement('textarea');
        this.prioritySelect = document.createElement('select');
        this.cancelButton = document.createElement('button');
    }

    getTitleText(){
        return this.titleInput.innerText;
    }

    getDueDate(){
        return this.dueDateInput.innerText;
    }

    getDescription(){
        return this.descriptionTextArea.select();
    }

    getPriority(){
        return this.prioritySelect.value;
    }

    getValues(projectId){
        return this.getTitleText();
    }




    create(){
        const newTodoContainer = document.createElement('div');
        const formTitle = document.createElement('div');
        const formTitleH2 = document.createElement('h2');
        const titleLabel = document.createElement('label');
        const dueDateLabel = document.createElement('label');
        const createButton = document.createElement('button');
        const descriptionLabel = document.createElement('label');
    
        const priorityLabel = document.createElement('label');

        const formOptions = document.createElement('div');
        

        const highOption = document.createElement('option');
        const mediumOption = document.createElement('option');
        const lowOption = document.createElement('option');

        newTodoContainer.classList.add = 'new-todo-container';
        formOptions.classList.add = 'form-options';
        formTitle.classList.add = 'form-title';
        createButton.id = 'create-new-todo';
        this.cancelButton.id = 'cancel-new-todo';

        highOption.value = 'high';
        mediumOption.value = 'medium';
        lowOption.value = 'low';

        this.dueDateInput.setAttribute('type', 'date')

        
        formTitleH2.innerText = 'New TODO';
        titleLabel.innerText = 'Title';
        dueDateLabel.innerText = 'Due Date';
        descriptionLabel.innerText = 'Description';
        priorityLabel.innerText = 'priority';
        createButton.innerText = 'Create';
        this.cancelButton.innerText = 'Cancel'


        highOption.innerText = 'High';
        mediumOption.innerText = 'Medium';
        lowOption.innerText = 'Low';

        formOptions.append(createButton, this.cancelButton);
        formTitle.append(formTitleH2);


        newTodoContainer.append(
            formTitle,
            titleLabel,
            this.titleInput,
            dueDateLabel,
            this.dueDateInput,
            descriptionLabel,
            this.descriptionTextArea,
            priorityLabel,
            this.prioritySelect,
            formOptions
        );


        this.prioritySelect.append(
            highOption,
            mediumOption,
            lowOption
        );

        return newTodoContainer;


    }
}