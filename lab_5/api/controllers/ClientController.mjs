import {Client} from "../models/Client.mjs";
export class ClientController
{
    static client=new Client();

    static  insertNewClient(req,res,next)
    {
        let data=req.body
        ClientController.client.insertClient(data).then(client=>{
            res.status(200).send(client)
        })
            .catch(next)
    }
    static getAllClientsData(req,res,next)
    {
        ClientController.client.getAllClients().then(clients=>{
            res.status(200).send(clients)
        }).catch(next)
    }
    static getClientData(req,res,next)
    {
        let clientId=req.params.id;
       ClientController.client.getClientByID(clientId).then(client=>{
           res.status(200).send(client)
       }).catch(err=>{
           res.status(404).send({
               error: "client with such id does not exist"
           })
       })
    }
    static deleteClient(req,res,next)
    {
        let clientId=req.params.id;
        ClientController.client.deleteClientByID(clientId).then(()=>{
            res.status(204).send({
                success: "client deleted successfully"
            })
        }).catch(next)
    }
    static deleteClientByUserName(req,res,next)
    {
        let clientUserName=req.params.username
        ClientController.client.deleteByUserName(clientUserName).then(()=>{
            res.status(204).send({
                success: "client deleted successfully"
            })
        }).catch(next)
    }

static updateClient(req,res,next)
{
    let clientId=req.params.id;
    let update=req.body
    ClientController.client.updateClientById(clientId,update).then((client)=>{
        res.status(200).send(client)
    }).catch(next)
}

}