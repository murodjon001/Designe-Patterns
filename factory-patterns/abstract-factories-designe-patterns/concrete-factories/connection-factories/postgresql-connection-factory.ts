import { IConncetionAbstractFactory } from "../../abstract-factories/conncetion-abstract-factory";
import { IConnectionDB } from "../../abstract-products/connection-db";
import { IConnectionParams } from "../../interfaces/connection-params.interface";
import {ConnectPostgresqlDB} from "../../concrete-products/connection/connect-postgresql"

export class ConncetionPostgresqlFactory implements IConncetionAbstractFactory {
    connection(params: IConnectionParams): IConnectionDB {
        const connection = new ConnectPostgresqlDB()
        connection.connection(params)
        
        return connection
    }
}