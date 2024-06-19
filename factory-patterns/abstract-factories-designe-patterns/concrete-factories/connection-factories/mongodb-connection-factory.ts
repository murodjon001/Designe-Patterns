import { IConncetionAbstractFactory } from "../../abstract-factories/conncetion-abstract-factory";
import { IConnectionDB } from "../../abstract-products/connection-db";
import { IConnectionParams } from "../../interfaces/connection-params.interface";
import {ConnectMongoDB} from "../../concrete-products/connection/connect-mongodb"

export class ConncetionModngodbFactory implements IConncetionAbstractFactory {
    connection(params: IConnectionParams): IConnectionDB {
        const connectMongodb = new ConnectMongoDB()
        connectMongodb.connection(params)
        
        return connectMongodb
    }
}