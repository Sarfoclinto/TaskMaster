import { useContext } from "react";
import { AuthContext } from "../types/context";

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};
export default useAuth;
