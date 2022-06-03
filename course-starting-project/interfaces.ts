// // type AddFN = (a:number, b:number) => number;
// interface AddFN{
//     (a:number, b:number):number;
// }


// let add: AddFN;
// add = (a:number , b:number)=>{
//     return a + b
// }

// interface Named{
//     readonly name: string;
//     outputName? : string;  //optional parameter
// }

// interface Greetable extends Named  {
//     // readonly name: string;
//     // age: number;

//     greet(phrase:string):void;
// }


// class Person implements Greetable{
//     name: string;
//     age:number = 20;
//     constructor(name:string){
//         this.name = name
//     }

//     greet(phrase:string) {
//  console.log(phrase + ' '+ this.name)

        
//     }
// }
// let person1 : Greetable;
// person1 = new Person("Natnem");
// person1.greet("Hollo")
// console.log(person1)








// // let person1 : Person;
// // person1={
// //     name:'Lubu Lubu',
// //     // age:20,
// //     greet(phrase: string){
// //         console.log(phrase + ' '+ this.name)
// //     }
// // }

// // console.log(person1)
// // person1.greet("Hello")