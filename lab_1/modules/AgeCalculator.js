function calculateBirthDate(date)
{
    let now= new Date;
    let inputDate=new Date(date)
    let currentYear=now.getFullYear();
    let birthYear=inputDate.getFullYear();
    if(currentYear<birthYear) throw "invalid birth date"
    return currentYear-birthYear;
}

function log(name,date)
{
    try {
       let age= calculateBirthDate(date);
        console.log(`hi ${name} your age is ${age} years`)
    } catch (e){
        console.error(e)
    }
}
module.exports=log;