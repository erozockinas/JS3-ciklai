// Pirma uzduotis
console.log("Pirma uzduotis");
const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

for (let i = 0; i<fruits.length; i++) {
    console.log(fruits[i]);
}

//Antra uzduotis
console.log("---------------")
console.log("Antra uzduotis");

var sum = 0;
const numbers = [1, 3, 7, 8, 2, 10, 4, 5, 6, 9];

for(let i = 0; i<numbers.length; i++) {
    if(numbers[i]>5) {
        sum = sum + numbers[i];
        console.log(numbers[i]);
    }
}

console.log(`skaiciu kurie didesni nei 5 suma yra ${sum}`);

//Trecia uzduotis
console.log("---------------")
console.log("Trecia uzduotis");

const people = [ 
	{ name: 'Alice', age: 25, validResidence: true },
	{ name: 'Bob', age: 17, validResidence: true },
	{ name: 'Charlie', age: 30, validResidence: false },
	{ name: 'John', age: 13, validResidence: true },
	{ name: 'Amy', age: 24, validResidence: true }
];

var peopleCanVote = [];
var peopleCanNotVote = [];


for(let i = 0; i<people.length; i++){
    if(people[i].age>=18&&people[i].validResidence==true){
        peopleCanVote.push(people[i]);
    }
    else{
        peopleCanNotVote.push(people[i]);
    }
}

console.log("People who can vote");
for(let j = 0; j<peopleCanVote.length; j++){
    console.log(peopleCanVote[j].name);
}

console.log("People who can NOT vote");
for(let k = 0; k<peopleCanNotVote.length; k++){
    console.log(peopleCanNotVote[k].name);
}
