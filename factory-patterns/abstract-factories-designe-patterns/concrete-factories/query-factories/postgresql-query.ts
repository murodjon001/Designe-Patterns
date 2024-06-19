import { IQueryAbstractFactory } from "../../abstract-factories/query-abstract-factory";
import { IQueryDB } from "../../abstract-products/query-db";
import { IQueryParams } from "../../interfaces/query-params.interface";
import {PostgresqlQuery} from "../../concrete-products/query/postgres-query"

export class QueryPostgresqlFactory implements IQueryAbstractFactory {
    create(params: IQueryParams): IQueryDB {
        const mongodb = new PostgresqlQuery()
        mongodb.create(params)

        return mongodb
    }

    delete(params: IQueryParams): IQueryDB {
        const mongodb = new PostgresqlQuery()
        mongodb.delete(params)

        return mongodb
    }

    findMany(params: IQueryParams): IQueryDB {
        const mongodb = new PostgresqlQuery()
        mongodb.findMany(params)

        return mongodb
    }

    findOne(params: IQueryParams): IQueryDB {
        const mongodb = new PostgresqlQuery()
        mongodb.findOne(params)

        return mongodb
    }

    update(params: IQueryParams): IQueryDB {
        const mongodb = new PostgresqlQuery()
        mongodb.update(params)

        return mongodb
    }
}