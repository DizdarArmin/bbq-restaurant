import { collection, doc } from "@firebase/firestore/lite";
import { getDocs, DocumentData } from "@firebase/firestore/lite";
import { addDoc, deleteDoc, updateDoc } from "@firebase/firestore/lite";
import { getFirestore } from "@firebase/firestore/lite";

import firebaseInstance from "../scripts/firebase";
const db = getFirestore(firebaseInstance);

export async function getCollection(path: string) {
  const collectionReference = collection(db, path);
  const snapshot = await getDocs(collectionReference);
  const list = snapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  return list;
}

export async function updateDocument(path: string, id: string, data: object) {
  const docReference = doc(db, path, id);
  await updateDoc(docReference, data as DocumentData);
}

export async function createDocument(path: string, data: object) {
  const documentRef = await addDoc(collection(db, path), data);
  return documentRef;
}

export async function removeDocument(path: string, id: string) {
  await deleteDoc(doc(db, path, id));
}
