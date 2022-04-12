const fs = require('fs');
fs.rename('./test.txt','./info.txt',(err)=>{
    if(err) throw err;
    console.log("done")
})

//*****************************************************************
fs.readFile('./data.json','utf8',((err, data) => {
    if(err) console.log(err)
    console.log(data)
}))
//***************************************************************

let data=fs.readFileSync('./data.json','utf8')
console.log(data)
//***************************************************************
let writeStream=fs.createWriteStream("./info")
writeStream.write("hello iti")
//***************************************************************

fs.mkdir('./madebynode',{},(err => {
    if(err) console.log(err)
}))

//**************************************************************
fs.rm('./info.txt',{},(err)=>{
    if(err) console.log(err)
})
