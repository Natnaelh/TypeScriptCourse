//validatable interface
interface Validatable {
    value: string | number;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
  }
// validate function

function Validate(validatableInput: Validatable) {
    let isValid = true;
    if (validatableInput.required) {
      isValid = isValid && validatableInput.value.toString().trim().length !== 0;
    }
    if (
      validatableInput.minLength != null &&
      typeof validatableInput.value === 'string'
    ) {
      isValid =
        isValid && validatableInput.value.length >= validatableInput.minLength;
    }
    if (
      validatableInput.maxLength != null &&
      typeof validatableInput.value === 'string'
    ) {
      isValid =
        isValid && validatableInput.value.length <= validatableInput.maxLength;
    }
    if (
      validatableInput.min != null &&
      typeof validatableInput.value === 'number'
    ) {
      isValid = isValid && validatableInput.value >= validatableInput.min;
    }
    if (
      validatableInput.max != null &&
      typeof validatableInput.value === 'number'
    ) {
      isValid = isValid && validatableInput.value <= validatableInput.max;
    }
    return isValid;
  }


// autobind decorator
function autobind(
    _: any,
    _2: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
      configurable: true,
      get() {
        const boundFn = originalMethod.bind(this);
        return boundFn;
      }
    };
    return adjDescriptor;
  }

//  Project List Class
class ProjectList{
    templateElement : HTMLTemplateElement;
    hostElement : HTMLDivElement;
    element : HTMLElement;

    constructor(private type: "active" | "finished"){
        this.templateElement = document.getElementById("project-list") ! as HTMLTemplateElement;
        this.hostElement  = document.getElementById("app") ! as HTMLDivElement;
        const importedNode = document.importNode(this.templateElement.content, true)
        this.element = importedNode.firstElementChild as HTMLElement;
        this.element.id = `${this.type}-projects`
        this.attach()
        this.renderContent()
    }

    private renderContent(){
        const listID = `${this.type}-projects-list`
        this.element.querySelector("ul")!.id  =  listID;
        this.element.querySelector('h2')!.textContent = this.type.toUpperCase() + " PROJECTS";
    }

    
    private attach(){
        this.hostElement.insertAdjacentElement("beforeend", this.element)
    }
}


//Project Input Class
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

    private gatherInputs():[string, string , number] | void{
        const enteredTitle  = this.titleInput.value;
        const enteredDescription = this.descriptionInput.value;
        const enteredPeople = this.peopleInput.value;
        // return [enteredTitle , enteredDesc , enteredPeople]

        const titleValidatable: Validatable = {
            value: enteredTitle,
            required: true
          };
          const descriptionValidatable: Validatable = {
            value: enteredDescription,
            required: true,
            minLength: 5
          };
          const peopleValidatable: Validatable = {
            value: +enteredPeople,
            required: true,
            min: 1,
            max: 5
          };

          if (
            !Validate(titleValidatable) ||
            !Validate(descriptionValidatable) ||
            !Validate(peopleValidatable)
          ) {
            alert('Invalid input, please try again!');
            return;
          } else {
            return [enteredTitle, enteredDescription, +enteredPeople];
          }
        }

    private clearInputs(){
        this.titleInput.value = '';
        this.descriptionInput.value = '';
        this.peopleInput.value = '';
    }

    @autobind
    private handleSubmit(event: Event){
        event.preventDefault()
        const userInput  = this.gatherInputs()
        if(Array.isArray(userInput)){
            const [title, desc , people] = userInput
            console.log(title, desc, people)
            this.clearInputs()
        }
        // console.log(userInput)
        // console.log(this.titleInput.value)
        // console.log(this.descriptionInput.value)
        // console.log(this.peopleInput.value)
    }

    private configure(){
        this.element.addEventListener('submit', this.handleSubmit)

    }
}


let Project = new  ProjectInput();
let activeProjects = new ProjectList('active')
let finishedProject = new ProjectList('finished')
