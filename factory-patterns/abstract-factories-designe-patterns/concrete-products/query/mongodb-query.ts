import { IQueryDB } from "../../abstract-products/query-db";
import { IQueryParams } from "../../interfaces/query-params.interface";

export class MongodbQuery implements IQueryDB {
    create(params: IQueryParams): void {
        // implement query
    }

    findOne(params: IQueryParams): void {
        // implement query
    }

    delete(params: IQueryParams): void {
        // implement query
    }

    findMany(params: IQueryParams): void {
        // implement query
    }

    update(params: IQueryParams): void {
        // implement query
    }
}