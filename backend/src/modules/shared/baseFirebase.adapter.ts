import { BaseEntity } from "./entity";

export const baseEntityToDBAdapter = (entity: BaseEntity) => {
  return {
    ...entity,
    id: entity.id,
    createdDate: entity.createdDate.getTime(),
    updatedDate: entity.updatedDate.getTime(),
  }
}

export const dBToBaseEntityAdapter = (dbObject: any) => {
  return {
    ...dbObject,
    id: dbObject.id,
    createdDate: new Date(dbObject.createdDate),
    updatedDate: new Date(dbObject.updatedDate),
  }
}