export interface CrudRepository<T, CreateDTO, UpdateDTO, QueryType> {
  getAll(filters?: QueryType): Promise<T[]>
  get(id: any): Promise<T>
  create(entity: CreateDTO): Promise<T>
  update(id: any, entity: UpdateDTO): Promise<T>
  delete(id: any): Promise<void>
}