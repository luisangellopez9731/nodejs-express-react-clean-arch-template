
import { ClientEntity } from "modules/client/domain";
import { BaseEntity, IBaseEntity } from "modules/shared/entity";

export interface IAppointmentEntity extends IBaseEntity {
  date: string
  clientId: ClientEntity["id"]
  services: any[]
  description?: string
  amount: number
  durationMinutes?: number
}

export class AppointmentEntity extends BaseEntity implements IAppointmentEntity {
  date: string
  clientId: ClientEntity["id"]
  services: any[]
  description?: string
  amount: number
  durationMinutes?: number
}

export class DTOCreateAppointment extends BaseEntity {
  date: string
  clientId: ClientEntity["id"]
  services: any[]
  description?: string
}
export interface DTOUpdateAppointment extends Omit<DTOCreateAppointment, 'id'> { }
