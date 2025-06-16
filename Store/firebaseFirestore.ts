import {
  addDoc,
  collection,
  DocumentData,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import app from "../firebase";

const db = getFirestore(app);

// add a document
export const addTasks = async (userId: string, text: string) => {
  await addDoc(collection(db, "tasks"), { userId, text, completed: false });
};

// get user's todos
export const fetchTasks = async (userId: string): Promise<DocumentData[]> => {
  const q = query(collection(db, "tasks"), where("userId", "==", userId));
  const snap = await getDocs(q);
  return snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};
