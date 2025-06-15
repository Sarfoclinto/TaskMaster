import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TaskProvider from "./context/TaskProvider.";
import { NavigationContainer } from "@react-navigation/native";
import TaskList from "./Screens/TaskList";
import TaskForm from "./Screens/TaskForm";
import TaskDetails from "./Screens/TaskDetails";
import { Task } from "./types/task";

export type NavigationsParams = {
  List: undefined;
  Form: { data?: Task };
  Detail: undefined;
};
const Stack = createNativeStackNavigator<NavigationsParams>();

export default function App() {
  return (
    <TaskProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="List" component={TaskList} />
          <Stack.Screen name="Form" component={TaskForm} />
          <Stack.Screen name="Detail" component={TaskDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </TaskProvider>
  );
}
