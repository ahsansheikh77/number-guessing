#! /usr/bin/env node
import inquirer from "inquirer";

//cmp  will genrate  a nmbr  done
//user input guesting nmbr  done
//compare user input wth cmpt gnrt nmbr and show result  done
const randomnumber= Math.floor(Math.random() *10);
//console.log(randomnumber);

console.log("welcome number guessing game");

// const randomnumber = 13;

const answer = await inquirer.prompt([
  {
    name: "userguessenumber",
    type: "number",
    message: "please guesse a number betweem 1 to 10:",
  },
]);
//if (agr yei condtion ture hai tw block wala print hoga if k)
if (answer.userguessenumber === randomnumber) {
  console.log("congtratulations ! you guessed right number");
} else {
  console.log("you guesse wrong number");
}
