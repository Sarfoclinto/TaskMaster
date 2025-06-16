import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import app from "../firebase";

const auth = getAuth(app);

// sign up
export const signup = (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// sign in
export const signIn = (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// sign out
export const logOut = () => signOut(auth);

//subscribe to auth changes
type callbackType = (user: User | null) => void;
export const onAuthStateChanged = (callback: callbackType) => {
  return auth.onAuthStateChanged(callback);
};
