import {User} from "../model/User.mjs";

export class Controller
{
    constructor() {
    }
    responseWithHome(req,res)
    {
        res.render('home')
    }
    signUp(req,res)
    {
        let data=req.body;
        let user=new User();
       let check=user.getUserByEmail(data.email);
       if(check){
           Controller.sendJsonResponse(res,400,{error:"This mail is already used"})
       }else
       {
           user.addUser(data)
           Controller.sendJsonResponse(res,200,{success:"User added successfully"})

       }
    }
    login(req,res)
    {
        let data=req.body;
        console.log(data)
        let user=new User();
        let userData=user.validateUser(data.email,data.password)
        if(userData)
        {
            res.render('profile',{USER:userData.name})
        }
        else{
            Controller.sendJsonResponse(res,400,{error:"invalid user name or password"})
        }
    }

  static  sendJsonResponse(res,status,jsonResponse)
    {
       // res.writeHead(status,{'Content-Type':'application/json'})
        res.status(status)
        res.json(jsonResponse)
    }
}