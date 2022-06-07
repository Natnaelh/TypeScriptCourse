// const last = <T>(array:T[])=>{
//     return array[array.length - 1]
// }
// let l1 = last([1, 2,3])
// let l2 = last(["1","2", "3"])

//MULTIPLE GENERIC INPUTS
// const makeArray = <X, Y>(x:X, y:Y): [X,Y]=>{
//     return[x, y]
// }
// let arr1 = makeArray<number | boolean, number>(1,5)
// let arr2 = makeArray("a", "b")
// let arr3 = makeArray("A", 5)

// const merge = <A, B>(objA:A,objB:B)=>{
//     return Object.assign(objA, objB)
// }

// let objA = {firstName:"Bob", lastName:"Marley"}
// let objB = {firstName:"Jane", lastName:'Austin', hobbies:["Coding", "Photography"]}
// let objC = merge(objA, objB)
// console.log(objC)



// GENERICS WITH EXTENDS
// const makeFullName = <T extends {firstName:string , lastName:string}> (obj:T) =>{
//     return({
//         ...obj, fullName: obj.firstName + ' ' + obj.lastName
//     })
// }

// let fullName = makeFullName({firstName:"Bob", lastName:"Dylan", age:28})
// console.log(fullName)

// GENERIC WITH INTERFACES
// interface Tabs<T>{
//     tabID : number;
//     tabName : string;
//     position: string;
//     data: T
// }

// let NumberTab : Tabs<number>;
// let StringTab : Tabs<string>;

// interface Lenghty{
//     length:number
// }
// const countAndTell=<T extends Lenghty>(element:T) : [T,string]=>{
//     let description = "Got no Element"
//     if(element.length === 1){
//         description = "Got one Element"
//         }
//     else if(element.length > 1){
//         description = "Got " + element.length  + " elements"
//     }

//     return [element, description]
// }
// // let element = ["A", "B", "C"]
// let element = [5,2,44]
// console.log(countAndTell(element))


// GENERIC CLASSES

// class DataStorage<T>{
//     private data: T[] = []
    
//     addItem(item:T){
//         this.data.push(item)
//     }

//     removeItem(item:T){
//         this.data.splice(this.data.indexOf(item), 1)

//     }

//     getItems(){
//         return [...this.data]
//     }

// }

// let storageOne = new  DataStorage
// storageOne.addItem(["BackBack One"])
// storageOne.addItem({amount:2, size:"50GB"})
// console.log(storageOne.getItems())














