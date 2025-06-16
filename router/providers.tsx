import { NavigationContainer } from "@react-navigation/native";
import FirebaseProvider from "../context/FirebaseProvider";
import TaskProvider from "../context/TaskProvider.";
import { FC, ReactNode } from "react";

type AppProviderProps = {
  children: ReactNode;
};
const AppProvider: FC<AppProviderProps> = ({ children }) => {
  return (
    <FirebaseProvider>
      <TaskProvider>
        <NavigationContainer>{children}</NavigationContainer>
      </TaskProvider>
    </FirebaseProvider>
  );
};
export default AppProvider;
