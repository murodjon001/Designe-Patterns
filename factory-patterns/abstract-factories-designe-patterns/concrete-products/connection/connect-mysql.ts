import { IConnectionDB } from "../../abstract-products/connection-db";
import { IConnectionParams } from "../../interfaces/connection-params.interface";

export class ConnectMysqlDB implements IConnectionDB {
    connection(params: IConnectionParams): void {
        // implement mysql db
    }
}