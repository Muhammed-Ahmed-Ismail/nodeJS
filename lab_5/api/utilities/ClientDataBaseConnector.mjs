import mongoose from "mongoose";

export class ClientDataBaseConnector {
    constructor(uri, callback) {
        this.mongoose=mongoose;
        const Schema = this.mongoose.Schema;
        const clientSchema = new Schema(
            {
                email: {
                    type: String,
                    required: true
                },
                username: {
                    type: String,
                    required: true,
                    unique: true
                },
                phone: {
                    type: String,
                    required: true
                },
                firstname: {
                    type: String,
                    required: true
                },
                lastname: {
                    type: String,
                    required: true
                }
            }
        )
        this.mongoose.connect('mongodb://localhost/muberclients', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        this.client=this.mongoose.model('client',clientSchema)
    }
}