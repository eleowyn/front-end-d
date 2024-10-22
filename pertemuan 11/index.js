// 1. String Literals
let fullName = "John Doe";
let age = 30;
let address = "Manado";

// Halo nama saya John Doe, umur saya 30 tahun
// dan saya tinggal di Manado

let kalimat = "Halo nama saya " + fullName + " umur saya " + age + " dan saya tinggal di " + address
console.log(kalimat);

// versi terbaru
let kalimat2 = `Hallo nama saya ${fullName} umur saya ${age} dan saya tinggal di ${address}`;
console.log(kalimat2)

// 2. Arrow Function
function sayGreetings(){
    return `Hello my name is ${fullName}`;
}
console.log(sayGreetings("John Doe"))

const sayGreetings2 = () => `Hello my name is ${fullName}`;
console.log(sayGreetings2("John Doe"));


// Arrow Function pada IIFE
let output2 = (() => "Hello")();
console.log(output2);

// Arow function pada callback function
let numbers = [1, 2, 3, 4, 5];
let output3 = numbers.map((item) => item);
console.log(output3);

// 3. Default parameter
const sayGreetings3 = (fullName, age, address) => {
    if (!fullName){
        fullName = "John Doe";
    }
    if(!age){
        age = 30;
    }
    if(!address){
        address = "Manado";
    }
    console.log(`Hallo nama saya ${fullName} umur saya ${age} tahun saya tinggal di ${address}`)
}
sayGreetings3("Elshera", 18, "Tomohon");

const sayGreetings4 =  (fullName = "John Doe", age = 25, address = "Tumaluntung")
  console.log(
    `Hallo nama saya ${fullName} umur saya ${age} dan saya tinggal di ${address}`
  );
sayGreetings4("Elshera", 18, "Tomohon");