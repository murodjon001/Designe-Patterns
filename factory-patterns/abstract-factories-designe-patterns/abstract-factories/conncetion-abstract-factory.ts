import { IConnectionDB } from "../abstract-products/connection-db";
import { IConnectionParams } from "../interfaces/connection-params.interface";

export interface IConncetionAbstractFactory{
    connection(params: IConnectionParams): IConnectionDB
}