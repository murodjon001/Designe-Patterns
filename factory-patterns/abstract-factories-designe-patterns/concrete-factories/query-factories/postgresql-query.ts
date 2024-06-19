import { IQueryAbstractFactory } from "../../abstract-factories/query-abstract-factory";
import { IQueryDB } from "../../abstract-products/query-db";
import { IQueryParams } from "../../interfaces/query-params.interface";
import {PostgresqlQuery} from "../../concrete-products/query/postgres-query"

export class QueryPostgresqlFactory implements IQueryAbstractFactory {
    database: IQueryDB

    constructor() {
        this.database =  new PostgresqlQuery()
    }

    create(params: IQueryParams): IQueryDB {
        return this.database.create(params)

    }

    delete(params: IQueryParams): IQueryDB {
        return this.database.delete(params)
    }

    findMany(params: IQueryParams): IQueryDB {
        return this.database.findMany(params)
    }

    findOne(params: IQueryParams): IQueryDB {
       return this.database.findOne(params)
    }

    update(params: IQueryParams): IQueryDB {
        return this.database.update(params)
    }
}