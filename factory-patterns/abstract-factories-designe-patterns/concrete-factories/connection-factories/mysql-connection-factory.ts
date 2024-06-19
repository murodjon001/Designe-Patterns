import { IConncetionAbstractFactory } from "../../abstract-factories/conncetion-abstract-factory";
import { IConnectionDB } from "../../abstract-products/connection-db";
import { IConnectionParams } from "../../interfaces/connection-params.interface";
import {ConnectMysqlDB} from "../../concrete-products/connection/connect-mysql"

export class ConncetionMysqlFactory implements IConncetionAbstractFactory {
    connection(params: IConnectionParams): IConnectionDB {
        const connectMysql = new ConnectMysqlDB()
        connectMysql.connection(params)
        
        return connectMysql
    }
}