
import { AppointmentEntity } from "modules/appointment/domain";
import { BaseEntity, IBaseEntity } from "modules/shared/entity";

export interface IClientEntity extends IBaseEntity {
  name: string
  description?: string
  phone?: string
  email?: string
  address?: string
  appointmentsId: AppointmentEntity["id"][]
}

export class ClientEntity extends BaseEntity implements IClientEntity {
  name: string
  description?: string
  phone?: string
  email?: string
  address?: string
  appointmentsId: AppointmentEntity["id"][]
}

// export class ProductEntity extends BaseEntity { }

export class DTOCreateClient extends BaseEntity {
  name: string
  description?: string
  phone?: string
  email?: string
  address?: string
}
export interface DTOUpdateClient extends Omit<DTOCreateClient, 'id'> { }
