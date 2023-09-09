import { ClientEntity } from "modules/client/domain";
import {
  AppointmentEntity,
  DTOCreateAppointment,
  IAppointmentEntity,
} from "./appointment.entity";

export class AppointmentValue
  extends AppointmentEntity
  implements IAppointmentEntity
{
  date: string;
  clientId: ClientEntity["id"];
  services: any[];
  description?: string;
  durationMinutes: number;

  constructor(dtoAppointment: DTOCreateAppointment) {
    super();
    this.date = dtoAppointment.date;
    this.clientId = dtoAppointment.clientId;
    this.services = dtoAppointment.services;
    this.description = dtoAppointment.description;
    this.durationMinutes = this.services.reduce((acc, current) => {
      return acc + (current.durationMinutes || 0);
    }, 0);
    this.amount = this.services.reduce((acc, current) => {
      return acc + current.price;
    }, 0);
  }
}
