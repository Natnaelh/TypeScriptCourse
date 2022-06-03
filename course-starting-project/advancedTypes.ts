// //INTERSECTION TYPES
// type Admin = {
//     name:string;
//     privilege:string[]
// }

// type Employee = {
//     name:string;
//     startDate:Date
// }

// type ElevatedEmployee = Admin & Employee

// const e1 : ElevatedEmployee ={
//     name:"Mr Max",
//     privilege:["Create server"],
//     startDate: new Date()
// }
// // console.log(e1)

// type Combinable = string | number
// type Numeric = number | boolean

// type Universal = Combinable & Numeric


// type UnknownEmployee = Employee & Admin

// function printEmployeeInfo(unk:UnknownEmployee){
//     console.log("Name: " + unk.name)
//     console.log("Start Date " + unk.startDate)
//     console.log("Privileges " + unk.privilege)
// }

//TYPE GUARDS
// let unkEmp : UnknownEmployee={
//     name:"Mr Max",
//     privilege:["Create server"],
//     startDate: new Date()
// }
// printEmployeeInfo(unkEmp)
// function add(a:Combinable, b:Combinable){
//     if(typeof a === "string" || typeof b === "string"){
//         return a.toString().concat(b.toString())
//     }
//     return a + b
// }
// console.log(add("H", "H"))
// console.log(add(5,79))



//itersection tyes using intefaces
// interface Admin  {
//     name:string;
//     privilege:string[]
// }
// interface Employee  {
//     name:string;
//     startDate:Date
// }
// interface ElevatedEmployee extends Admin, Employee{}
// const e1 : ElevatedEmployee ={
//     name:"Mr Max",
//     privilege:["Create server"],
//     startDate: new Date()
// }
// console.log(e1)



//DISCRIMINATED UNIONS
// interface Horse{
//     type:"horse",
//     runningSpeed: number
// }

// interface Bird{
//     type:'bird',
//     flyingSpeed:number
// }

// type Animal = Horse | Bird

// function moveAnimal(animal:Animal){
//     let speed;
//     switch(animal.type){
//         case "horse":{
//             speed = animal.runningSpeed 
//             console.log("Moving at Speed of " + speed)
//             break
//         }
//         case "bird":{
//             speed = animal.flyingSpeed
//             console.log("Flying at Speed of " + speed)
//             break
//         }
//     }
// }
// moveAnimal({type:'bird', flyingSpeed:200})

//TYPE CASTING
// const userInputElement = document.getElementById("user-input") ! as HTMLInputElement
// userInputElement.value = "Input your Choice"


//INDEXED PROPERTIES
// interface ErrorContainer{
//     [prop:string]:string;
//     // id:string;
// }
// const er1 : ErrorContainer ={
//     email: "Not a valid Email",
//     username: "Must Start with Capital character"
// }
// console.log(er1)



//FUNCTIONN OVERLOADING
// type Combinable = string | number
// function add(a:number , b:number): number;
// function add(a:string, b:string):  string;
// function add(a:string, b:number):  string;
// function add(a:number, b:string):  string
// function add(a:Combinable, b:Combinable){
//     if(typeof a === "string" || typeof b === "string"){
//         return a.toString().concat(b.toString())
//     }
//     return a + b
// }

// console.log(add("a", 5))
// console.log(add(5, "a"))
// console.log(add("a", "a"))
// console.log(add(8,8))



