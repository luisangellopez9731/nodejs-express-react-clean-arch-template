import { v4 as uuid } from 'uuid'

export type IDType = string

export type Timestamp = number

export interface IBaseEntity {
  id: IDType
  createdDate: Date
  updatedDate: Date
}

export class BaseEntity implements IBaseEntity {
  id: string
  createdDate: Date
  updatedDate: Date

  constructor() {
    this.id = uuid()
    const date = new Date()
    this.createdDate = date
    this.updatedDate = date
  }
}