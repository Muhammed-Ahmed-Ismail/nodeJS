import {Controller} from "../controller/Controller.mjs";
import express from "express";

export class Router
{
    constructor() {
        this.controller=new Controller();
        this.router=express.Router();
    }

    route()
    {
        this.router.get('/',this.controller.responseWithHome)
        this.router.post('/signup',this.controller.signUp)
        this.router.post('/login',this.controller.login)
        this.router.use('/assets', express.static('./assets'));
        return this.router
    }
}