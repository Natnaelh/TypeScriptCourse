
// abstract class Department {
//     static fiscalYear:number = 2022
//     // private Id = string;
//     // private name: string;
//     protected employees : string [] = []

//   constructor(protected readonly Id:string, private name: string) {
//     // this.name = name;
//     Department.fiscalYear = 2025
//   }

//   static createEmployee(name:string){
//     return{name:name}
//   }

//  public addEmployee(name:string){
//       this.employees.push(name)
//   }

//  public showEmployees(){
//       console.log(this.employees.length)
//       console.log(this.employees)
//   }

//  abstract describe(this: Department):void;
// }

// class ITDep extends Department{
//     // admin : string[];
//     constructor (Id:string , public admins:string[]){
//     super(Id,"IT")
//     // this.admin = admins
//     }

//      public addAdmins(name:string){
//         this.admins.push(name)
//     }

//     describe() {
//         console.log("IT Departement ID: " + this.Id)
//     }
// }

// class AccountingDepartment extends Department{
//     private lastReport : string;
//     constructor(id:string , private reports:string[]){
//     super(id, "ACC")
//     this.lastReport = reports[0]
//     }

    
//     describe() {
//         console.log("Accounting  Departement ID: " + this.Id)
//     }

//     public addReport(text:string){
//         this.reports.push(text)
//     }

//     get getMostRecentReport(){
//         if(!this.lastReport){
//             throw new Error("No Report Found")
//         }
//         return this.lastReport

//     }

//     set setMostRecentReport(text:string){
//         if(!text){
//             throw new Error("Empty Report")
//         }
//         this.addReport(text)
//     }

//     public addEmployee(name: string): void {
//         if(name === "Max"){
//             return
//         }
//         this.employees.push(name)
//     }
//     public getReports(){
//         console.log(`Reports: ${this.reports} ` )
//     }

// }

// // const employee1 = Department.createEmployee("Zemene")
// // console.log(employee1)
// // console.log(Department.fiscalYear)

// let accounting = new AccountingDepartment("02",[]);
// accounting.addEmployee("Max")
// accounting.addEmployee("Gobiye")
// // console.log(accounting.describe())
// // accounting.getReports()
// // accounting.addEmployee("Max")
// // accounting.addEmployee("Natnem")
// // accounting.showEmployees()
// // console.log(accounting);
// // let accountingCopy = {  describe: accounting.describe() };
// // accounting.describe();
// // accountingCopy.describe;
// accounting.setMostRecentReport = "Report for June"
// accounting.setMostRecentReport = "Report for July"
// // console.log(accounting.getMostRecentReport)


// let ITdepartment = new ITDep("01",["Max"] )
// ITdepartment.addEmployee("Shegiye")
// console.log(ITdepartment)
// // ITdepartment.describe()
// ITdepartment.addAdmins("Manu")
// // console.log(ITdepartment.admins)

