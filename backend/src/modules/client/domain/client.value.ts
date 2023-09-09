import { ClientEntity, DTOCreateClient, IClientEntity } from "./client.entity";

export class ClientValue extends ClientEntity implements IClientEntity {
  name: string
  description?: string
  phone?: string
  email?: string
  address?: string
  appointmentsId: any[]

  constructor(dtoClient: DTOCreateClient) {
    super()
    this.name = dtoClient.name
    this.description = dtoClient.description
    this.phone = dtoClient.phone
    this.email = dtoClient.email
    this.address = dtoClient.address
    this.appointmentsId = []
  }

}