import { IQueryDB } from "../abstract-products/query-db";
import { IQueryParams } from "../interfaces/query-params.interface";

export interface IQueryAbstractFactory{
    findOne(params: IQueryParams): IQueryDB
    findMany(params: IQueryParams): IQueryDB
    create(params: IQueryParams): IQueryDB
    update(params: IQueryParams): IQueryDB
    delete(params: IQueryParams): IQueryDB
}