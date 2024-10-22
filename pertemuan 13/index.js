// Rest Paremeter and Spread Operator

// 1. Rest Paramter
// Digunakan pada saat kita membuat fungi yang memiliki banyak parameter

// fungsi tanpa rest parameter
const func1 = (param1, param2, param3, param4, param5) =>{
    console.log(param1, param2, param3, param4, param5);
};
func1("A", "B", "C", "D", "E");

// fungsi dengan rest parameter
const func2 = (...params) =>{
    console.log(params);        // params tipe array
};
func2("A", "B", "C", "D", "E");

// rest parameter harus berada di terkahir dalam parameter list
const func3 = (param1, param2, ...params) => {
    console.log(param1, param2);
    console.log(params);
};
func3("A", "B", "C", "D", "E");

// Mini Exercise
const penjumlahan = (...params) => {
    let hasil = 0;
    params.forEach((item) => (hasil += item))
    return hasil;
}

console.log(penjumlahan(1, 2, 3, 4, 5, 6));


// 2. Spread Operator
// Digunakan pada Array atau Object untuk memecah Array/Object menjadi element-element yan lebih kecil
// Spread Operator digunakan untuk menambahkan element ke dalam Array/Object yang sudah ada

// Array
let numbers = [1, 2, 3];
console.log(numbers);
console.log(...numbers);

// 1. Duplikasi array
let numbers2 = [numbers];
console.log(numbers2)

let numbers3 = [...numbers];
console.log(numbers3)

// 2. Menggabungkan Array
let arr = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];

let number3 = arr.concat(arr2,arr3);
let number4 = [...arr, ...arr2, ...arr3];
console.log(number3);
console.log(number4)

// Object
const john = {
    fullName: "John Doe",
    age: 30,
};

// 1. Duplikasi Object
const john2 = { ...john, address: "Manado"};
console.log(john2);

// 2. Menggabungkan Object
let obj1 = {a: 1, b:2};
let obj2 = {c:3, d:4};
let obj3 = {e:5, f:6};

let combinedObj = {...obj1, ...obj2, ...obj3};
console.log(combinedObj);