const fs = require('fs');
/*const  readline=require('readline/readline')*/
const LineReader=require('readline')
let fileHandler=LineReader.createInterface({
    input: fs.createReadStream('./greet.txt'),
    output: process.stdout
})
fileHandler.on('line',()=>{
    console.log('\n ******************************')
})
