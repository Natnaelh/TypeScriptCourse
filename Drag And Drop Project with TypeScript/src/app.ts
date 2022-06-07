class ProjectInput{
    templateElement : HTMLTemplateElement;
    hostElement : HTMLDivElement;
    element : HTMLFormElement;
    titleInput : HTMLInputElement;
    descriptionInput: HTMLInputElement;
    peopleInput : HTMLInputElement;

    constructor(){
        this.templateElement = document.getElementById("project-input") ! as HTMLTemplateElement;
        this.hostElement  = document.getElementById("app") ! as HTMLDivElement;
        const importedNode = document.importNode(this.templateElement.content, true)
        this.element = importedNode.firstElementChild as HTMLFormElement;
        this.element.id = "user-input"
        this.titleInput = this.element.querySelector("#title") ! as HTMLInputElement;
        this.descriptionInput  = this.element.querySelector("#description") ! as HTMLInputElement;
        this.peopleInput = this.element.querySelector("#people") ! as HTMLInputElement;
        this.configure()
        this.attach()
    }

    private attach(){
        this.hostElement.insertAdjacentElement("afterbegin", this.element)
    }
    private handleSubmit(event: Event){
        event.preventDefault()
        console.log(this.titleInput.value)
        console.log(this.descriptionInput.value)
        console.log(this.peopleInput.value)
    }

    private configure(){
        this.element.addEventListener('submit', this.handleSubmit.bind(this))
        
    }
}

let app = new  ProjectInput();