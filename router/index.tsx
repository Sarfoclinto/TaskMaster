import useAuth from "../hooks/useAuth";
import AppStack from "./stacks/AppStack";
import AuthStack from "./stacks/AuthStack";

const RootNav = () => {
  const { user, initializing } = useAuth();
  if (initializing) return null; // or show a splash screen
  return user ? <AppStack /> : <AuthStack />;
};
export default RootNav;
