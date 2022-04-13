//const express=require('express')
import express from 'express'
import {Controller} from "../controller/Controller.mjs";
export class Server
{
    constructor() {
        this.app=express();
        this.controller= new Controller();
    }
    startServer()
    {
        this.app.listen(9000)
        this.app.set('view engine', 'ejs');
        this.route();
    }
    route()
    {
        this. app.use(express.urlencoded({ extended: false }))
        this.app.use(express.json())
        this.app.get('/',(req,res)=>{
            this.controller.responseWithHome(res)
        })

        this.app.use('/assets', express.static('./assets'));

        this.app.post('/signup',(req,res)=>{
            let data=req.body;
            console.log(data)
            this.controller.signUp(res,data)
        })
        this.app.post('/login',(req,res)=>{
            let data=req.body;

            this.controller.login(res,data)
        })
    }
}