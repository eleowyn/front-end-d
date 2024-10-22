// JavaScript Object and  Conditional
// Deklarasi Objek
let john = {
    firstName: "John", //Property and value
    age: 30,
    isMarried: true,
    grade: [80, 90, 100],
    sayGreetings: function (){
        console.log("Hello my name is " + this.firstName);
    },
    address: {
        street: "Jl. Arnold Mononutu",
        city: "Minahasa Utara",
        province: "Sulawesi utara",
        postalCode: 95371
    }
};
console.log(john);

// Mengakses properti dalam object
// Dot Notation
console.log(john.firstName); // John
console.log(john.age); //30
john.age = 31; //Ubah Nilai
console.log(john);
john.job = "Teacher"; // tambah properti baru
console.log(john);

// 2. Bracket notation
console.log(john["isMarried"]); //true
john["nationality"] = "Indonesia"; //tambah properti baru
console.log(john);

// Object Method
john.sayGreetings();

// Object inside Objecgt
console.log(john.address.city);
console.log(john.address);

// Delete property object
delete john.grade;
console.log(john);

// JavaScript Conditional
// 1. if = else
// Jika temperature > 37 tampilkan cuaca panas
// else tampilkan cuaca dingin

temp = 37
if (temp >= 37){
    console.log("Cuaca hari ini panas");
}
else {
    console.log("Cuaca hari ini dingin");
}

//2. if - else if - else
// Jika nilai 100 - 80 grade A
// Jika nilai 70 - 79 grade B
// Jika nilai 50 - 69 Grade C
// Jika nilai < 50 Grade D

let nilai = 56;
if(nilai > 80 && nilai <= 100){
    console.log("Anda mendapatkan nilai A")
}
else if(nilai > 79 && nilai <= 79){
    console.log("Anda mendapatkan nilai B")
}
else if(nilai > 50 && nilai <= 69){
    console.log("Anda mendapatkan nilai C")
}
else{
    console.log("Anda mendapatkan nilai D")
}

