import {ClientDataBaseConnector} from "../utilities/ClientDataBaseConnector.mjs";
export class Client
{
    constructor() {
        this.dbc=new ClientDataBaseConnector();
    }

    insertClient(data)
    {
       return this.dbc.client.create(data)
    }
    getAllClients()
    {
        return this.dbc.client.find()
    }
    getClientByID(id)
    {
        return this.dbc.client.findById(id)
    }
    deleteClientByID(id)
    {
        return this.dbc.client.findOneAndDelete({_id:id})
    }
    deleteByUserName(username)
    {
        return this.dbc.client.findOneAndDelete({username:username})
    }
    updateClientById(id,newData)
    {
        return this.dbc.client.findByIdAndUpdate(id,newData)
    }
}