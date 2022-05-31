
class Department {
    // private Id = string;
    // private name: string;
    private employees : string [] = []

  constructor(private Id:string, private name: string) {
    // this.name = name;
  }

  addEmployee(name:string){
      this.employees.push(name)
  }

  showEmployees(){
      console.log(this.employees.length)
      console.log(this.employees)
  }

  describe(this: Department) {
    console.log(`ID = ${this.Id} Department = ${this.name}`);
  }
}
let accounting = new Department("Acc","Accounting");
accounting.addEmployee("Max")
accounting.addEmployee("Natnem")
accounting.showEmployees()
// console.log(accounting);
// let accountingCopy = {  describe: accounting.describe() };
accounting.describe();
// accountingCopy.describe;
