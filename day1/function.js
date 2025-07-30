/* 
Welcome to JDoodle!

You can execute code here in 88 languages. Right now you’re in the Nodejs IDE.

  1. Click the orange Execute button ▶ to execute the sample code below and see how it works.

  2. Want help writing or debugging code? Type a query into JDroid on the right hand side ---------------->

  3. Try the menu buttons on the left. Save your file, share code with friends and open saved projects.

Want to change languages? Try the search bar up the top. 
*/
function greet(name) {
  return `Hello, ${name}!`;
}
//console.log(greet("Node.js"));
/*let [,,name]=process.argv; // getting input from command prompt and executing function
console.log(greet(name));*/

//interactive mode
const readline = require('readline');

// Create interface to read input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


// Ask user for name
rl.question("Enter your name: ", function(name) {
  console.log(greet(name));
  rl.close();
});
