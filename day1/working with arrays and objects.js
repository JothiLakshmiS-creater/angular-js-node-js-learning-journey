/* 
Welcome to JDoodle!

You can execute code here in 88 languages. Right now you’re in the Nodejs IDE.

  1. Click the orange Execute button ▶ to execute the sample code below and see how it works.

  2. Want help writing or debugging code? Type a query into JDroid on the right hand side ---------------->

  3. Try the menu buttons on the left. Save your file, share code with friends and open saved projects.

Want to change languages? Try the search bar up the top. 
*/
let numbers = [1, 2, 3];
numbers.push(4);
let doubled = numbers.map(n => n * 2);
let even = numbers.filter(n => n % 2 === 0);
console.log(doubled);
let student = {
  name: "Lakshmi",
  age: 27,
  subjects: ["Math", "Science"]
};
console.log(student.subjects[0]);


let fruits = ["apple", "banana", "mango"];
fruits.push("grape");        // add at end
fruits.pop();                // remove last
fruits.unshift("orange");    // add at start
fruits.shift();              // remove first
console.log(fruits);
console.log(fruits.includes("apple"));    // true
console.log(fruits.indexOf("banana"));    // 1
fruits.forEach(fruit => console.log(fruit));
fruits.sort();     // Alphabetical
fruits.reverse();  // Reverses order



//object operations


student.age = 28; // Update
student.city = "Chennai";         // Add new key
delete student.subjects;
console.log(student);
console.log(Object.keys(student));      
console.log(Object.values(student));    
console.log(Object.entries(student));  
let moreInfo = { country: "India", age: 30 };
let merged={...student,...moreInfo};
console.log(merged);


let students = [
  { name: "Lakshmi", age: 27 },
  { name: "Ravi", age: 25 }
];

students.forEach(s => console.log(`${s.name} is ${s.age}`));