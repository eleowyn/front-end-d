// IIFE and Callback
// 1. IIFE (Immediately Invoked Function Expression) = anonymous function
// functi ini tidak ada parameter dan argument dan return value


(function (){
    console.log("Hello World")
})();


// With parameter & arguments and return value
let output = (function (fullName){
    return "Hello " + fullName;
})("John Doe");

console.log(output);



// 2. Callback function ( I will call back later! hahahahaha)
// No parameters, arguments and return value
function sayHello(callback){
    // Logic atau codingan yang lain
    callback();
}
sayHello(function(){
    console.log("Hello World");
}) //anonymous function


// With parameter & arguments and return value
function sayHello(callback){
    let outputt = callback("John Doe");
    return outputt;
}
let outputt =sayHello(function(fullName){
    return "Hello " + fullName;
});
console.log(outputt);