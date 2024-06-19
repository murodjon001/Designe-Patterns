import { IQueryParams } from "../interfaces/query-params.interface"

export interface IQueryDB{
    findOne(params: IQueryParams): void
    findMany(params: IQueryParams): void
    create(params: IQueryParams): void
    update(params: IQueryParams): void
    delete(params: IQueryParams): void
}