import { QueryConstraint } from "firebase/firestore";
import { IClientEntity, ClientRepository } from "../../domain";
import { FirebaseCrudRepository } from "modules/shared/FirebaseCrud.repository";

export class ClientFirebaseRepository extends FirebaseCrudRepository<IClientEntity, IClientEntity, Partial<IClientEntity>> implements ClientRepository<QueryConstraint[]> { }