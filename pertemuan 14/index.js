// 1. Destructuring (Array & Object)
// Array
let film = ["Harry Potter", "Narnia", "Home Alone", "Peter Pan"];
let [film1, film2, film3, film4] = film;

console.log(film1);
console.log(film2);
console.log(film3);
console.log(film4); 

// Object
let aktor = {
    nama: "Helena Bonham Carter",
    umur: 58,
    pekerjaan: "Aktris",
    asal: "London"
};
let { nama, umur, pekerjaan, asal } = aktor;

console.log(nama);
console.log(umur);
console.log(pekerjaan);
console.log(asal);

// 2. Destructuring dengan mengambil sebagian item (Array & Object)
// Array
let films = ["Harry Potter", "Narnia", "Home Alone", "Peter Pan"];
let [film11, , film13] = films;

console.log(film11);
console.log(film13);

// Object
let aktor2 = {
    nama: "Helena Bonham Carter",
    umur: 58,
    pekerjaan: "Aktris",
    asal: "London"
};
let { nama: nama2, pekerjaan: pekerjaan2 } = aktor2;

console.log(nama2);
console.log(pekerjaan2);

// 3. Destructuring dengan menggunakan default value (Array & Object)
// Array
let filmList = ["Harry Potter", "Narnia"];
let [film31, film32, film33 = "Default"] = filmList;

console.log(film31);
console.log(film32);
console.log(film33); 

// Object
let aktor3 = {
    nama: "Helena Bonham Carter",
    umur: 58
};
let { nama: nama3, umur: umur3, pekerjaan: pekerjaan3 = "Default" } = aktor3;

console.log(nama3);
console.log(umur3); 
console.log(pekerjaan3);

// 4. Destructuring dengan menggunakan rest operator (Array & Object)
// Array
let allFilms = ["Harry Potter", "Narnia", "Home Alone", "Peter Pan"];
let [film41, ...restFilm41] = allFilms;

console.log(film41);
console.log(restFilm41);

// Object
let aktor4 = {
    nama: "Helena Bonham Carter",
    umur: 58,
    pekerjaan: "Aktris",
    asal: "London"
};
let { nama: nama4, ...restAktor4 } = aktor4;
console.log(nama4);
console.log(restAktor4); 