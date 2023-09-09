import { FirebaseOptions, initializeApp } from "firebase/app"
import { getFirestore, Firestore, initializeFirestore } from "firebase/firestore";

export let app: ReturnType<typeof initializeApp> | undefined
export let db: Firestore | undefined

export const getDB = () => {
  return db as Firestore
}

const initFirebase = async () => {

  const { FIREBASE_CONFIG } = process.env

  if (!FIREBASE_CONFIG) {
    throw new Error("No firebase config provided")
  }

  app = initializeApp(JSON.parse(FIREBASE_CONFIG) as FirebaseOptions);
  initializeFirestore(app, {
    ignoreUndefinedProperties: true
  })
  db = getFirestore(app)
  // const token = credential.accessToken;
}

export default initFirebase