const CustomEmitter=require('./CustomEmitter')
let customEmitter=new CustomEmitter();
customEmitter.on('signup',(name)=>{
    console.log(name + " has signed up");
})
customEmitter.emit('signup',"muhammed")