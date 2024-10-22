// JavaScript Array
// array adalah variable yang dapat menyimpan banyak data
// data yang disimpan dalam array dapat berupa string, number, boolean, object, function,
// array lainnya, dan lain-lain.
// array dapat diakses menggunakan index, dimana index adalah posisi data dalam array.
// array dapat diakses menggunakan method-method yang telah disediakan oleh JavaScript.
// contoh method-method array adalah push(), pop(), shift(), unshift(), splice(), sort(),
// reverse(), indexOf(), lastIndexOf(), includes(), forEach(), map(), filter(), reduce(),
// reduceRight(), some(), every(), find(), findIndex(), keys(), values(), entries(),
// concat(), join(), slice(), toString(), toLocaleString(), toLocaleUpperCase(),
// toLocaleLowerCase(), toUpperCase(), toLowerCase(), indexOf(), lastIndexOf(),
// includes(), every(), some(), find(), findIndex(), keys(), values(), entries(),


// DEKLARASI ARRAY
// Cara 1. Array Literal
let numbers = [1, 2, 3, 4, 5];
console.log(numbers); // [1, 2, 3, 4, 5]

// Cara. 2 Menggunakan kata kunci new
let numbers2 = new Array(4, 5, 6, 7, 8);
console.log(numbers2);

// Tipe data yang bisa disimpan dalam array
let numbers3 = [1, 2, 3, 4, 5]; // number
let students = ["John", "Jane", "Doe"]; // string
let john = ["John", 30, true, [80,90,100]]; //mixed
console.log(john);
console.log(john[3][0]); // 80

// Array Length
console.log[numbers3.legth];
console.log[students.length];
console.log[john.length];

//Mengakses elemnt/data tertentu didalam Array
// Melallui index array, index selalu dimulaid dari 0
console.log(numbers3[2]);
console.log(students[1]);
console.log(john[2]);
console.log(john[3][1]);

// Meangkses element/data terakhir dalam array
let numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbers4[numbers4.length - 1]); // 10


// Array Method
// adalah fungsi array
let arrays = [1, 2, 3, "hallo", false, true];
console.log(arrays); // [1, 2, 3, "hallo", false

// 1. toString()
console.log(arrays.toString());

// 2. join()
console.log(arrays.join());
console.log(arrays.join(" "));
console.log(arrays.join("-"));

// 3. pop()
arrays.pop();  // hapus index terakhir
console.log(arrays);

// 4. push()
arrays.push("Selamat Pagi");  // tambah di index terakhir
console.log(arrays);

// 5. shift()
arrays.shift();  // hapus index ke - 1
console.log(arrays);

// 6. unshift()
arrays.unshift("Selamat Pagi"); // tambah di index pertama
console.log(arrays);

// 7.splice()
arrays.splice(3, 1);
console.log(arrays);
arrays.splice(3, 0, 4, 5);
console.log(arrays);

// 8. concat()
let buah = ["pisang", "apel", "jeruk"];
let sayur = ["tomat", "bayam", "Wortel"];
let biji = ["kedelai", "kacang tanah", "kacang polong"];
let makanan = buah.concat(sayur, biji);
console.log(makanan);

// 9. slice()
let sayuran = makanan.slice(3, 6);
console.log(sayuran);
let bijian = makanan.slice(6);
console.log(bijian);
