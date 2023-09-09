import { collection, getDocs, doc, setDoc, getDoc, deleteDoc, updateDoc, QueryConstraint, query } from 'firebase/firestore'
import { getDB } from 'modules/shared/firebase'
import { baseEntityToDBAdapter, dBToBaseEntityAdapter } from './baseFirebase.adapter'
import { CrudRepository } from './CrudRepository'
import { BaseEntity, IBaseEntity } from './entity'

export class FirebaseCrudRepository<Entity extends IBaseEntity, CreateDTO extends BaseEntity, UpdateDTO> implements CrudRepository<Entity, CreateDTO, UpdateDTO, QueryConstraint[]> {
  collectionName: string

  private getCollection = () => collection(getDB(), this.collectionName)
  private getDoc_ = (docId: string) => doc(getDB(), this.collectionName, docId)

  constructor(collectionName: string) {
    this.collectionName = collectionName
  }

  async getAll(filters: QueryConstraint[] = []) {
    const data = (await getDocs(query(this.getCollection(), ...filters))).docs.map(doc => {
      return {
        ...doc.data(),
        id: doc.id
      }
    }).map(e => dBToBaseEntityAdapter(e))
    return data
  }
  get = async (id: string) => {
    const data = await getDoc(this.getDoc_(id))

    if (!data.exists) {
      throw new Error("account not found")
    }

    return dBToBaseEntityAdapter({ id, ...data.data() })
  }
  async create(entity: CreateDTO) {
    const { id, ...obj } = baseEntityToDBAdapter(entity)
    await setDoc(this.getDoc_(id), obj)
    return dBToBaseEntityAdapter(await this.get(id))
  }
  async update(id: string, entity: UpdateDTO): Promise<Entity> {
    const doc = this.getDoc_(id) as any
    await updateDoc(doc, entity as any)

    return dBToBaseEntityAdapter(await this.get(id))
  }
  delete = async (id: string) => {
    await deleteDoc(this.getDoc_(id))
  }
}