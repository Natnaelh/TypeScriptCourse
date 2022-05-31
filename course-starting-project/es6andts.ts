// // const add=(a:number, b:number) => a + b;
// // const printOutput = (output:(number|string)) =>console.log(output)

// // const button = document.querySelector("button");
// // if(button){
// //     button.addEventListener("click", (event)=>console.log(event))
// // }
// // printOutput(add(5, 5))


// //Spread Operator
// // const person  ={
// //     name:"Mr. Person",
// //     age: 5
// // }
// // const copiedPerson = {...person}
// // // copiedPerson.({...person})
// // console.log(copiedPerson)
// // console.log(person)

// // let lists : string[] = ["Yes"]
// // let listCopy:string[] = [...lists , ["hell", "no"]]
// // listCopy = listCopy.push()

// const add = (...numbers:number[]) => {
//     return numbers.reduce((curResult, curValue)=>{
//         return curResult + curValue
//     },0)
// }

// console.log(add(1,2,3,4,5,6))