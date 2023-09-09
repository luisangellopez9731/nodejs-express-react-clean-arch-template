import { IAppointmentEntity } from "./appointment.entity";
import { CrudRepository } from "modules/shared/CrudRepository";

export interface AppointmentRepository<QueryType> extends CrudRepository<IAppointmentEntity, IAppointmentEntity, Partial<IAppointmentEntity>, QueryType> { }