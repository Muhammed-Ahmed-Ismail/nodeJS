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
                this.extractData(this.signup)
                break;
            case '/login':
                this.extractData(this.login)
                break;
            default :
                this.sendError()

        }
        this.res.end();
    }

    responseWithHomePage() {
        if (this.req.method === 'GET') {
            let home = fs.readFileSync('./static/welcome.html');
            this.res.writeHead(200, {'Content-Type': 'text/html'})
            this.res.write(home);
        } else {
            this.res.writeHead(405)
        }
    }

    signup(data) {
        let result = this.userService.addNewUser(data)
        console.log(result)
        if (result) {
            let msg = {
                success: "user was added successfully"
            }
            console.log(msg)
            this.res.writeHead(200, {'Content-Type': 'application/json'})
            this.res.write(JSON.stringify(msg))
        } else {
            let msg = {
                error: "This email is used already"
            }
            console.log(JSON.stringify(msg))
            console.log(this.res)
            this.res.writeHead(400, {'Content-Type': 'application/json'})
            this.res.write(JSON.stringify(msg))
        }
    }

    login(data) {
        let result = this.userService.validateUser(data);

        if (result) {
            this.res.writeHead(200, {'Content-Type': 'text/html'})
            let page = fs.readFileSync('./static/profile.html')
            //page.replace('{username}',data.name)
            this.res.write(page)
        }
    }

    sendError() {
        this.res.writeHead(404)
    }

    extractData(dataHandler) {
        let body = "";

        this.req.on('data', (data) => {
            body += data;
        })
        this.req.on('end', () => {
            let data = JSON.parse(body);
            // console.log("gggg"+data)
            console.log(this)
            dataHandler.call(this, data)
        })
    }

}