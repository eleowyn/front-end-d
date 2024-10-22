// JavaScript Loop
// 1. for looping

// array object
let student = [
    {
        id: 1,
        firstName: "John",
        grade: 80,
    },
    {
        id: 2,
        firstName: "Jane",
        grade: 90,
    },
    {
        id: 3,
        firstName: "Bob",
        grade: 100,
    }
];
// Menampilkan semuanya
console.log(student);
// Menampilkan item satu per satu
for(let i=10; i< student.length; i++){
    console.log(student[i])
    }



// 2. while looping
let i = 0;
while(i<student.length){
    console.log(student[i]);
    i++;
}


// 3. Do while
let y = 0
do{
    console.log(student[y]);
    y++;
}while (y < student.length);


// Arrat built-in method
// 1. forEach()
student.forEach(function(item, index){
    console.log(item);
    console.log(index);
});


// 2. map()
student.map(function(item, index){
    console.log(item);
})

let output = student.map(function(item, index){
    return item;
})
console.log(output);

// 3. filter()
let outputs = student.filter(function(item){
    return item.grade >= 90;
})
console.log(outputs);

// 4. find()
let outputss = student.find(function(item){
    return item.grade >= 90;
});
console.log(outputss);


// 5. findIndex()
let index = student.findIndex(function(item){
    return item.firstName == "Jane";
});
console.log(index);


// MINI EXERCISE
