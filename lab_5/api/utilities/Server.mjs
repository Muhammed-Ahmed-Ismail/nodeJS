//const express=require('express')
import express from 'express'
import {Router} from "../routes/Router.mjs";


export class Server
{
    constructor() {
        this.app= new express();
        //console.log(this.app)
        this.router=new Router(this.app)
    }
    startServer()
    {
        let routes=this.router.configureRoutes();
        this.app.listen(9000)
        this.app.use(express.json())
        this.app.use(routes)
        this.app.use((err,req,res,next)=>{
            console.log("ssas+++++++++++++++")
            console.log(err.message)
            res.status(422).send({error: err.message})
        })

    }

}