
import  {readFileSync,writeFileSync} from 'fs';
export class UserService
{
    addNewUser(userJson) {

        let content=readFileSync('./data/users.json');
        let users=JSON.parse(content);
        let result= users.find((user)=> {
            return user.email===userJson.email;
        })
        console.log(result)
        if(result === undefined)
        {
            console.log("usad")
            users.push(userJson)
            writeFileSync('./data/users.json',JSON.stringify(users))
            return true;
        }
        else return false;
    }

    validateUser(userJson)
    {
        let content=readFileSync('./data/users.json');
        let users=JSON.parse(content);
        let result= users.find((regestereduser)=> {
            return regestereduser.email===userJson.email && regestereduser.password===userJson.password;
        })
        return [result !== undefined , result];
    }


}