import { User } from "firebase/auth";
import { FC, ReactNode, useEffect, useState } from "react";
import { onAuthStateChanged } from "../auth/firebaseAuth";
import { AuthContext } from "../types/context";

type FirebaseProviderProps = {
  children: ReactNode;
};
const FirebaseProvider: FC<FirebaseProviderProps> = ({ children }) => {
  const [user, setuser] = useState<User | null>(null);
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const unsuscribe = onAuthStateChanged((u) => {
      setuser(u);
      if (initializing) setInitializing(false);
    });
    return unsuscribe;
  }, []);
  return (
    <AuthContext.Provider value={{ user, initializing }}>
      {children}
    </AuthContext.Provider>
  );
};
export default FirebaseProvider;
