import { QueryConstraint } from "firebase/firestore";
import { IAppointmentEntity, AppointmentRepository } from "../../domain";
import { FirebaseCrudRepository } from "modules/shared/FirebaseCrud.repository";

export class AppointmentFirebaseRepository extends FirebaseCrudRepository<IAppointmentEntity, IAppointmentEntity, Partial<IAppointmentEntity>> implements AppointmentRepository<QueryConstraint[]> { }