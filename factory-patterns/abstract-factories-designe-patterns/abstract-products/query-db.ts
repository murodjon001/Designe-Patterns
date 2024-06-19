import { IQueryParams } from "../interfaces/query-params.interface"

export interface IQueryDB{
    findOne(params: IQueryParams)
    findMany(params: IQueryParams)
    create(params: IQueryParams)
    update(params: IQueryParams)
    delete(params: IQueryParams)
}