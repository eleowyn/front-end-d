
//  ARRAY
let people = ["Greg", "Mary", "Devon", "James"];
// 1. Using a for-loop, iterate through this array and console.log all of the people.
console.log(people);
for(let i=0; i< people.length; i++){
    console.log(people[i])
}

//2. Using a forEach, iterate through this array and console.log all of the people
people.forEach(function(item, index){
    console.log(item);
    console.log(index);
});

//3. Write the command to remove "Greg" from the array
people.shift();{
console.log(people);
}

//4. Write the command to remove "James" from the array
people.pop();
console.log(people);

//5. Write the command to add "Matt" to the front of the array
people.unshift("Matt");
console.log(people);

// 6. Write the command to add "Elshera" to the end of the array
people.push("Elshera");
console.log(people);

//7. Break
for(let i=0; i< people.length; i++){
    console.log(people[i])
    if(people[i] == "Mary"){
        break
    }
}
console.log("Exit Loop")

// 8
let copy = people.slice(2)
console.log(copy)

// 9.
people.splice(2, 1, "Elizabeth", "Artie");
console.log(people)

//10
let withBob = people.concat("Bob")
console.log(withBob)




// OBJEK
let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

// 1. Add the command to add the languange "Go" to the end of the languages array
programming.languages.push("Go");
console.log(programming);

// 2. 
programming["difficulty"] = 7;
console.log(programming);

// 3. 
delete programming.jokes;
console.log(programming);

// 4. 
programming.isFun = true;
console.log(programming);

// 5. 
programming.languages = programming.languages.map((language, index) => `${index} - ${language}`);
console.log(programming);
