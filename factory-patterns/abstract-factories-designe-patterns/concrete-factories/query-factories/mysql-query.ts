import { IQueryAbstractFactory } from "../../abstract-factories/query-abstract-factory";
import { IQueryDB } from "../../abstract-products/query-db";
import { IQueryParams } from "../../interfaces/query-params.interface";
import {MysqlQuery} from "../../concrete-products/query/mysql-query"

export class QueryMysqlFactory implements IQueryAbstractFactory {
    create(params: IQueryParams): IQueryDB {
        const mongodb = new MysqlQuery()
        mongodb.create(params)

        return mongodb
    }

    delete(params: IQueryParams): IQueryDB {
        const mongodb = new MysqlQuery()
        mongodb.delete(params)

        return mongodb
    }

    findMany(params: IQueryParams): IQueryDB {
        const mongodb = new MysqlQuery()
        mongodb.findMany(params)

        return mongodb
    }

    findOne(params: IQueryParams): IQueryDB {
        const mongodb = new MysqlQuery()
        mongodb.findOne(params)

        return mongodb
    }

    update(params: IQueryParams): IQueryDB {
        const mongodb = new MysqlQuery()
        mongodb.update(params)

        return mongodb
    }
}