import { collection, getDocs, query, limit, where, doc, setDoc, addDoc, deleteDoc } from "firebase/firestore"
import { db } from "../../firebase/db"
import { dbName } from "../products/types"

export const callControl = async (context: any, payload: number) => {
  const collecttionDB = collection(db, dbName.control)

  const queryDB = query(collecttionDB, limit(payload || 100))
  const querySnapshot = await getDocs(queryDB)

  if (context.state.localDBFirst) {
    querySnapshot.forEach((doc) => {
      context.state[doc.id] = { ...context.state[doc.id], ...doc.data() }
    })
  }
}