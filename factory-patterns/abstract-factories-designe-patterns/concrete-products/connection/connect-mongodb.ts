import { IConncetionAbstractFactory } from "../../abstract-factories/conncetion-abstract-factory";
import { IConnectionDB } from "../../abstract-products/connection-db";
import { IConnectionParams } from "../../interfaces/connection-params.interface";

export class ConnectMongoDB implements IConnectionDB{
    connection(params: IConnectionParams): void {
        // implement conncetion mongodb
    }
}