#! /usr/bin/env node
// Import the inquirer from a inquirer module by npm website
import inquirer from "inquirer";
import chalk from "chalk";
console.log(
  chalk.bold.bgCyanBright("<=========> Word Counter Project <=========>)")
);

// Create a variable of answers that we store in a sentence:
const answers: {
    sentence: string;
} = await inquirer.prompt(
    {
    name: "sentence",
    type: "input",
    message: chalk.bold.yellow(("Enter your sentence to count the each word of the sentence:"))
    }
);

// Create anothe variable of words,in this variable we will remove whitespaces by using trim() method and the sentence convert into array and separated by each word with comma by using split(" ") method:

const words = answers.sentence.trim().split(" ")
console.log(words);

// Now the last step we will find a length of sentence that how much word the sentence get:
console.log(chalk.bold.magenta(`Your sentence length is: ${words.length} `));



