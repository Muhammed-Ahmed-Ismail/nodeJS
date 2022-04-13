import * as fs from 'fs';
import {UserService} from './UserService.mjs';

export class Router {
    constructor(_req, _res) {
        this.req = _req;
        this.res = _res;
        this.userService = new UserService();
    }

    route() {
        let rUrl = this.req.url;
        switch (rUrl) {
            case '/':
                this.responseWithHomePage();
                break;
            case '/signup':
                this.signup()
                break;
            case '/login':
                this.login()
                break;
            default :
                this.sendError()
        }

    }

    responseWithHomePage() {

            let home = fs.readFileSync('./static/welcome.html');
            this.sendRespoonse(200,'text/html',home)
    }

    signup() {

            this.extractData().then((data)=>{
                let result = this.userService.addNewUser(data)
                console.log(result)
                console.log("no44m")
                console.log("fi")
                if (result) {
                    let msg = {
                        success: "user was added successfully"
                    }
                    this.sendRespoonse(200,'application/json',JSON.stringify(msg))
                } else {
                    let msg = {
                        error: "This email is used already"
                    }
                    this.sendRespoonse(400,'application/json',JSON.stringify(msg))
            }
        })
    }

    login() {
        this.extractData().then((data)=>{
            console.log('login')

            let result = this.userService.validateUser(data);

                console.log('login')
            if (result[0]) {
                let page = fs.readFileSync('./static/profile.html', 'utf8')
                let respondPage=page.replace("{username}",result[1].name)
                this.sendRespoonse(200,'text/html',respondPage)
            }
            else {
                let msg={
                    error: "invalid mail or password"
                }
                this.sendRespoonse(400,'application/json',JSON.stringify(msg))
            }
        })


    }

    sendError() {
        this.res.writeHead(404)
    }

    extractData() {
        return new Promise(resolve => {

            let body = "";

            this.req.on('data', (data) => {
                body += data;
            }).on('end', () => {
                let data = JSON.parse(body);
                resolve(data)

            });
        });
    }

    sendRespoonse(status,type,response)
    {
        this.res.writeHead(status,{'Content-Type': type})
        this.res.write(response)
        this.res.end()
    }

}
