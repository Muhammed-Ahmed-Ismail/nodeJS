import {FileHandler} from "../Utilities/FileHandler.mjs";
import e from "express";

export class User
{
    constructor() {
        this.fileHandler= new FileHandler()
        this.users= this.fileHandler.readJsonFile('./data/users.json')
        console.log(this.users)
    }

    getUserByEmail(email)
    {
        let result= this.users.find((user)=>{
            return user.email===email
        })
        if(result===undefined)
        {
            return null;
        }else
        {
            return result;
        }
    }

    validateUser(email,passsword)
    {
        let userRegestedData=this.getUserByEmail(email);
        if(userRegestedData===null || userRegestedData.password != passsword)
        {
            return null;
        }
        else return userRegestedData
    }
    addUser(newRecord)
    {
        this.users.push(newRecord);
        this.fileHandler.writeJsonFile('./data/users.json',JSON.stringify(this.users))
    }

}