import {User} from "../model/User.mjs";
import {json} from "express";

export class Controller
{
    constructor() {
        this.user=new User();
    }
    responseWithHome(res)
    {
        res.render('home')
    }
    signUp(res,data)
    {
       let check=this.user.getUserByEmail(data.email);
       if(check){
            this.sendJsonResponse(res,400,{error:"This mail is already used"})
       }else
       {
           this.user.addUser(data)
           this.sendJsonResponse(res,200,{success:"User added successfully"})
       }
    }
    login(res,data)
    {
        let userData=this.user.validateUser(data.email,data.password)
        if(userData)
        {
            res.render('profile',{USER:userData.name})
        }
        else this.sendJsonResponse(res,400,{error:"invalid user name or password"})
    }

    sendJsonResponse(res,status,jsonResponse)
    {
       // res.writeHead(status,{'Content-Type':'application/json'})
        res.status(status)
        res.json(jsonResponse)
    }
}