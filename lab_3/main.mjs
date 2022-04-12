import * as http from 'http';
import {Router} from "./modules/Router.mjs";

const port=9800;
http.createServer((req,res)=>{
    let router= new Router(req,res)
    router.route();
}).listen(port)

