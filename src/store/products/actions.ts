import { collection, getDocs, query, limit, where, doc, setDoc, addDoc, deleteDoc } from "firebase/firestore"
import { db } from "../../firebase/db"
import { dbName } from "./types"

export const callProducts = async (context: any, payload: number) => {
  console.log("xx")
  const collecttionDB = collection(db, dbName.storeProducts)

  const queryDB = query(collecttionDB, where("title", "!=", "null"), limit(payload || 100))
  const querySnapshot = await getDocs(queryDB)

  const data: any = {}
  querySnapshot.forEach((doc) => {
    data[doc.data().title] = doc.data()
    data[doc.data().title].dbID = doc.id
  })

  context.commit('setProducts', data)
}