//const express=require('express')
import express from 'express'
import {Controller} from "../controller/Controller.mjs";
import {Router} from "../router/Router.mjs";

export class Server
{
    constructor() {
        this.app=express();
        this.controller= new Controller();
        this.router=new Router()
    }
    startServer()
    {
        let routes=this.router.route();
        this.app.listen(9000)
        this. app.use(express.urlencoded({ extended: false }))
        this.app.use(express.json())
        this.app.set('view engine', 'ejs');
        this.app.use(routes)

    }

}