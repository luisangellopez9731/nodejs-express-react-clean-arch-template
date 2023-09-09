import { CrudUseCases } from "modules/shared/crudUseCases";
import {
  AppointmentRepository,
  AppointmentValue,
  DTOCreateAppointment,
  DTOUpdateAppointment,
  IAppointmentEntity,
} from "../domain";
import { Utils } from "./utils";
import { ERROR_CODE, ServerError } from "common/errorTypes";

export class AppointmentUseCase
  implements
    CrudUseCases<
      IAppointmentEntity,
      DTOCreateAppointment,
      DTOUpdateAppointment
    >
{
  constructor(
    private readonly appointmentRepository: AppointmentRepository<any>
  ) {}

  dbAppointmentToEntity(dbAppointment: IAppointmentEntity) {
    return {
      ...dbAppointment,
      amount: dbAppointment.services.reduce((acc, { price }) => acc + price, 0),
    };
  }

  getAll = async () => {
    return await (
      await this.appointmentRepository.getAll()
    ).map((a) => new AppointmentValue(a));
  };
  get = async (id: string) => {
    return this.dbAppointmentToEntity(await this.appointmentRepository.get(id));
  };
  create = async (obj: DTOCreateAppointment) => {
    const appointmentToCreate = new AppointmentValue(obj);

    const appointmentToCreateDate = new Date(appointmentToCreate.date);

    const appointments = await this.getAll();

    const appointmentThatCollide = Utils.getAppointmentInSameTime(
      appointments,
      {
        initialDate: appointmentToCreateDate,
        durationMinutes: appointmentToCreate.durationMinutes,
      }
    );

    if (appointmentThatCollide) {
      throw new ServerError({
        name: "APPOINTMENT_ALREADY_IN_DATE",
        message: "Ya hay una cita en esta fecha",
      });
    }
    const appointmentCreated = await this.appointmentRepository.create(
      appointmentToCreate
    );
    return new AppointmentValue(appointmentCreated);
  };
  update = async (id: IAppointmentEntity["id"], obj: DTOUpdateAppointment) => {
    const appointmentUpdated = await this.appointmentRepository.update(id, obj);
    return this.dbAppointmentToEntity(appointmentUpdated);
  };
  delete = async (id: string) => {
    return await this.appointmentRepository.delete(id);
  };
}
