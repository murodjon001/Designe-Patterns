import { IConnectionDB } from "../../abstract-products/connection-db";
import { IConnectionParams } from "../../interfaces/connection-params.interface";

export class ConnectPostgresqlDB implements IConnectionDB{
    connection(params: IConnectionParams): void {
         //implement connect postgresql db
     }
}