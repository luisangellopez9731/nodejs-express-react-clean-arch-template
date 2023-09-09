import { IClientEntity } from "./client.entity";
import { CrudRepository } from "modules/shared/CrudRepository";

export interface ClientRepository<QueryType> extends CrudRepository<IClientEntity, IClientEntity, Partial<IClientEntity>, QueryType> { }