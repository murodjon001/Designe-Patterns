import { ConncetionPostgresqlFactory } from "../concrete-factories/connection-factories/postgresql-connection-factory";
import { ConncetionMysqlFactory } from "../concrete-factories/connection-factories/mysql-connection-factory"
import {ConncetionModngodbFactory} from "../concrete-factories/connection-factories/mongodb-connection-factory"
import { DatabaseEnum } from "../enums/databases.enum";
import { IConnectionParams } from "../interfaces/connection-params.interface"
import { IConnectionDB } from "../abstract-products/connection-db";
import { IQueryParams } from "../interfaces/query-params.interface";
import {IQueryDB} from "../abstract-products/query-db"
import { QueryPostgresqlFactory } from "../concrete-factories/query-factories/postgresql-query";
import { QueryModngodbFactory } from "../concrete-factories/query-factories/mongodb-query";
import { QueryMysqlFactory } from "../concrete-factories/query-factories/mysql-query";

//=========================Entity=======================//
export class ConncetionDB {
    firstDataBase: IConnectionDB
    database: DatabaseEnum
    query: IQueryDB

    constructor(database: DatabaseEnum, conncetData: IConnectionParams) {
        this.database = database

        switch (database) {
            case ("PostgreSQL"):
                this.firstDataBase = new ConncetionPostgresqlFactory()
                this.firstDataBase.connection(conncetData)
                break;
            
                case ("MongoDb"):
                    this.firstDataBase = new ConncetionModngodbFactory()
                    this.firstDataBase.connection(conncetData)
                    break;
            
                case ("MySQL"):
                    this.firstDataBase = new ConncetionMysqlFactory()
                    this.firstDataBase.connection(conncetData)
                    break;
        }
    }

    create(params: IQueryParams) {
        switch (this.database) {
            case ("PostgreSQL"):
                this.query = new QueryPostgresqlFactory()
                this.query.create(params)
                break;
            
                case ("MongoDb"):
                    this.query = new QueryModngodbFactory()
                    this.query.create(params)
                    break;
            
                case ("MySQL"):
                    this.query = new QueryMysqlFactory()
                    this.query.create(params)
                break;
        }
        return this.query
    }

    update(params: IQueryParams) {
        switch (this.database) {
            case ("PostgreSQL"):
                this.query = new QueryPostgresqlFactory()
                this.query.update(params)
                break;
            
                case ("MongoDb"):
                    this.query = new QueryModngodbFactory()
                    this.query.update(params)
                    break;
            
                case ("MySQL"):
                    this.query = new QueryMysqlFactory()
                    this.query.update(params)
                break;
        }
        return this.query
    }

    findMany(params: IQueryParams) {
        switch (this.database) {
            case ("PostgreSQL"):
                this.query = new QueryPostgresqlFactory()
                this.query.findMany(params)
                break;
            
                case ("MongoDb"):
                    this.query = new QueryModngodbFactory()
                    this.query.findMany(params)
                    break;
            
                case ("MySQL"):
                    this.query = new QueryMysqlFactory()
                    this.query.findMany(params)
                break;
        }
        return this.query
    }

    findOne(params: IQueryParams) {
        switch (this.database) {
            case ("PostgreSQL"):
                this.query = new QueryPostgresqlFactory()
                this.query.findOne(params)
                break;
            
                case ("MongoDb"):
                    this.query = new QueryModngodbFactory()
                    this.query.findOne(params)
                    break;
            
                case ("MySQL"):
                    this.query = new QueryMysqlFactory()
                    this.query.findOne(params)
                break;
        }
        return this.query
    }

    delete(params: IQueryParams) {
        switch (this.database) {
            case ("PostgreSQL"):
                this.query = new QueryPostgresqlFactory()
                this.query.delete(params)
                break;
            
                case ("MongoDb"):
                    this.query = new QueryModngodbFactory()
                    this.query.delete(params)
                    break;
            
                case ("MySQL"):
                    this.query = new QueryMysqlFactory()
                    this.query.delete(params)
                break;
        }
        return this.query
    }
}



// ============================ Client========================================//
const query = new ConncetionDB(DatabaseEnum.PostgreSQL, {
    database: "test",
    password: "test",
    port: 1234,
    user: "test"
})

const findOne = query.findOne({ id: "12345" })

console.log(findOne);
