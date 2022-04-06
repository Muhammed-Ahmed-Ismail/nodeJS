const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
const ageCalculator=require("./modules/AgeCalculator");
const claculator = require("./modules/Calculator");
console.log("Enter the numbers you want to make calculation on them")

/*readline.question("Enter the two numbers separated with ',': ", (input) => {
    let numbers = input.split(",");
    console.log(numbers);
    try {
        result = claculator.div(numbers[0], numbers[1])
        console.log(result)
    } catch (e) {
        console.error(e)
    }

})*/

readline.question("Now Lets calculate your age : Enter your name and Birth date separated by a space: ", (input) => {

    let args = input.split(" ");
    ageCalculator(args[0],args[1])
    readline.close()

})

