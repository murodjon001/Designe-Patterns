import { IQueryAbstractFactory } from "../../abstract-factories/query-abstract-factory";
import { IQueryDB } from "../../abstract-products/query-db";
import { IQueryParams } from "../../interfaces/query-params.interface";
import {MongodbQuery} from "../../concrete-products/query/mongodb-query"

export class QueryModngodbFactory implements IQueryAbstractFactory {
    create(params: IQueryParams): IQueryDB {
        const mongodb = new MongodbQuery()
        mongodb.create(params)

        return mongodb
    }

    delete(params: IQueryParams): IQueryDB {
        const mongodb = new MongodbQuery()
        mongodb.delete(params)

        return mongodb
    }

    findMany(params: IQueryParams): IQueryDB {
        const mongodb = new MongodbQuery()
        mongodb.findMany(params)

        return mongodb
    }

    findOne(params: IQueryParams): IQueryDB {
        const mongodb = new MongodbQuery()
        mongodb.findOne(params)

        return mongodb
    }

    update(params: IQueryParams): IQueryDB {
        const mongodb = new MongodbQuery()
        mongodb.update(params)

        return mongodb
    }
}