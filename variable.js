/*  variable ++++++++++
A variable is a container used to store data or information in programming.

why user variable 
to store value (name,age, marks,etc.)
to reduce the value
to make code flexible and dynamic


===  how to declare variable in js

==== these are keywords
let : let is a block scope  variable, it can not be re-declared in  the same scope but can be re-assignd

const :      const is block scope variable . it cant re-declared and re-assigned. 
but objects and arrys declared with const can still modified internally.


var : it is function scoped, not block scoped, it can re-declared and re-assigned.


example:   */

/*
var a = 10;
var a = 20; // re-declaration allow
a = 30;   // re-assigned
console.log(a)



let b = 30;
//let b = 40; // error cannot re-declared 
b = 50  // re-assigned
console.log(b)



const c = 12;
// const c = 15; // error cannot re-declared
// c = 100;   // error cannot re-assigned


const obj = { name: "vinay" }
obj.name = "singh";  // objects properties can change 
console.log(c)
console.log(obj)




// scoped

// 1. Globle scoped:  globle scope is variable declared outside all function or block.

// Accessible everywhere in the code.

// Example:

let name = "vinay";
function great() {
    console.log(name); // can access globle variable
}
great()
console.log(name)



// 2. function scope ya local scope

// variable declared inside a function using var, lat, const.
//     only available inside that function.
 





function show() {
    let sms = "hello"; // functiomn scope
    console.log(sms) // accessible here
}
show();
//console.log(sms)  // error: sms is not defined 
// */


// function outer() {
//     let name = "vinay";
//     function inner() {
//         console.log(name)
//     }
//     inner()
// }
// outer()


// block scopes :  variavle declared with let, const inside{} (if,for,while,etc.)
// cannot be outside accessed the block

// if (true) {
//     let x = 10;
//     const y = 20;
//     var z = 30;
//     console.log(x,y,z) // accessed
// }
// console.log(z)  // accessed
//console.log(x,y) // cannot accessed



// data types stored in variable
/*
Types             Exmaple 
string            "hello"
Number             1233,1.3
Boolean            true, false
Null                null  
Undefined          undefined
objects          {name: "Raj"}
Array              [1,2,3,4,5,6]
*/

// Example


// let str = "hello vinay";
// let num = 12;
// let isRight = true;
// let name = null;
// let unde; 
// let obj = { age: 23, name: "KUMAR" }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(str,num,isRight,name,unde,obj,arr)

 

// function test() {
//     if (true) {
//         var x = 40;
//     }
//     console.log(x)
// }





// function str() {
//     if (true) {
//         let age = 20;
//     }
//     console.log(age)  // not accessed
// }
// function arr() {
//     if (true) {
//         var y = 40;
//     }
//     console.log(y)  // accessed 
// }
// arr()

// let str = "vinay kumar singh ";
// var num = [1, 2, 3, 4, 5];
// const obj = { name: "singh" }
// console.log(str,num,obj)
