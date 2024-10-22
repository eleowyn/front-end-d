// javascript Function

// Cara 1. Function Declaration (Fungsi yang berdiri sendiri)

// Function Initialization
// function greetings1(){
//     console.log("Hello, World!");
// }
// greetings1(); // Function Call

// // Cara 2. Function Expression
// let greetins2 = function (){
//     console.log("Hello, World!");
// };
// greetins2();


// Parameter & Argument
// Cara 1
//                  parameter
// function greetings1(fullName){
//     return "Hello " + fullName;
// }
// //                      argument
// let output = greetings1("John Doe");
// console.log(output);

// // Cara 2
// let greeetins2 = function (fullName){
//     return "Hello " + fullName
// }
// let output2 = greeetins2("Jane Doe")
// console.log(output2);


// Function Hoisting
// Cara 1
let output = greetings1("John Doe");
console.log(output);

function greetings1(fullName){
    return "Hello " + fullName;
}

// Cara 2 tidak bisa/error
// let output2 = greeetins2("Jane Doe")
// console.log(output2);

// let greeetins2 = function (fullName){
//     return "Hello " + fullName
// }

// Global and Local Scope (Function & Block)

let x = 10; // Local
function foo(){
    let y = 20;
    console.log(x); // 10
    console.log(y); // 20
    if(x < y){
        let z = 30;
        console.log(z); // 30
    }
    console.log(z); // error
}

console.log(x); //10
// console.log(y); // error
foo();

