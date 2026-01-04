// // import chalk from "chalk"; // modern import syntax,  promises
// const fs = require("fs");
// const path = require("path")
// //  npm run start

// // console.log(chalk.blue('Hello, world!'));
// // console.log(chalk.red.bold('This is an error message.'));
// // console.log(chalk.green.underline('This is a success message.'));

// const filePath = path.join(__dirname, "a2.txt")

// fs.readFile(filePath, "utf-8", function(err, data){
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data);
//     }
// })




// CREATING A CLI
const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
  .name('counter')
  .description('CLI to do file based tasks')
  .version('0.8.0');

program.command('count')
  .description('Count the number of lines in a file')
  .argument('<file>', 'file to count')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        const words = data.split(' ').length;
        console.log(`There are ${words} words in ${file}`);
      }
    });
  });


console.log('before parse')
program.parse();
console.log('after parse')
