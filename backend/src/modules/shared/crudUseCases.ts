import { IDType } from "./entity"

export interface CrudUseCases<T extends { id: IDType }, CreateDto, UpdateDto> {
  getAll(): Promise<T[]>
  get(id: T['id']): Promise<T>
  create(obj: CreateDto): Promise<T>
  update(id: T['id'], obj: UpdateDto): Promise<T>
  delete(id: T['id']): Promise<void>
}