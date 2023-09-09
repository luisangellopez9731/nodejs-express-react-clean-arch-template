import { CrudUseCases } from "modules/shared/crudUseCases";
import { ClientEntity, ClientRepository, ClientValue, DTOCreateClient, DTOUpdateClient, IClientEntity } from "../domain";

export class ClientUseCase implements CrudUseCases<IClientEntity, DTOCreateClient, DTOUpdateClient> {
  constructor(private readonly ClientRepository: ClientRepository<any>) { }

  getAll = async () => {
    return await this.ClientRepository.getAll()
  }
  get = async (id: string) => {
    return await this.ClientRepository.get(id)
  }
  create = async (obj: DTOCreateClient) => {
    const client = new ClientValue(obj)
    const clientCreated = await this.ClientRepository.create(client)
    return clientCreated
  }
  update = async (id: IClientEntity["id"], obj: DTOUpdateClient) => {
    const clientUpdated = await this.ClientRepository.update(id, obj)
    return clientUpdated
  }
  delete = async (id: string) => {
    return await this.ClientRepository.delete(id)
  }

}