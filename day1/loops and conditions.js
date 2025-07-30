/* 
Welcome to JDoodle!

You can execute code here in 88 languages. Right now you’re in the Nodejs IDE.

  1. Click the orange Execute button ▶ to execute the sample code below and see how it works.

  2. Want help writing or debugging code? Type a query into JDroid on the right hand side ---------------->

  3. Try the menu buttons on the left. Save your file, share code with friends and open saved projects.

Want to change languages? Try the search bar up the top. 
*/
//for loop
/*for(let i=0;i<=5;i++)
{
    console.log("i=",i);
}*/
//while loop
/*let i = 1;
while (i <= 5) {
  console.log("i =", i);
  i++;
}*/
//do while loop
/*let i = 1;
do {
  console.log("i =", i);
  i++;
} while (i <= 5);*/

//loops with array
let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
    if(fruit==="apple")
    {
        continue;
    }
    else
    {
        process.stdout.write("fruit name is ");
    }
  console.log(fruit);
}
//loops with objects
let person = { name: "Lakshmi", age: 27 };
for (let key in person) {
  console.log(key + ":", person[key]);
}
let values = Object.values(person);

for (let value of values) {
  console.log(value);
}