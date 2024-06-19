import { IConnectionParams } from "../interfaces/connection-params.interface";

export interface IConnectionDB{
    connection(params: IConnectionParams): void
}