const add = function (a = 0, b = 0) {
    checkArguments(a,b)
    return Number(a)+Number(b);
}

const sub = function (a=0,b=0){
    checkArguments(a,b)
    return Number(a)-Number(b);
}

const multi=function (a=1,b=1){
    checkArguments(a,b)
    return Number(a)*Number(b);
}
const div=function (a=1,b=1)
{
    checkArguments(a,b)

    return Number(a)/Number(b);
}

const checkArguments=(a,b)=>
{
    if(isNaN( Number(a)) || isNaN(Number(b))) throw "Invalid argument"
}
module.exports=
    {
        add: add,
        sub: sub,
        multi: multi,
        div: div
    }