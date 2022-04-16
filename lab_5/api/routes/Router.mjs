import {ClientController} from "../controllers/ClientController.mjs";
import express from "express";

export class Router
{
    configureRoutes()
    {
        let routes=express.Router()
        routes.post('/api/client',ClientController.insertNewClient)
        routes.get('/api/clients',ClientController.getAllClientsData)
        routes.get('/api/clients/:id',ClientController.getClientData)
        routes.delete('/api/clients/:id',ClientController.deleteClient)
        routes.delete('/api/clients/username/:username',ClientController.deleteClientByUserName)
        routes.put('/api/clients/:id',ClientController.updateClient)
        return routes
    }
}