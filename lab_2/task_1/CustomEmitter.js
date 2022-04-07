const Emmitter=require('events');
const Util=require('util')
function CustomEmitter()
{}
Util.inherits(CustomEmitter,Emmitter);



module.exports=CustomEmitter;