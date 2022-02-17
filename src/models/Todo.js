export default class Todo{
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