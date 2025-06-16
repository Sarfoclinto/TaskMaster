import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Task } from "../../types/task";
import TaskList from "../../Screens/TaskList";
import TaskForm from "../../Screens/TaskForm";
import TaskDetails from "../../Screens/TaskDetails";
import HomeScreen from "../../Screens/HomeScreen";

export type NavigationsParams = {
  Home: undefined;
  Login: undefined;
  SignUp: undefined;
  List: undefined;
  Form: { data?: Task };
  Detail: undefined;
};
export const Stack = createNativeStackNavigator<NavigationsParams>();
const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="List" component={TaskList} />
      <Stack.Screen name="Form" component={TaskForm} />
      <Stack.Screen name="Detail" component={TaskDetails} />
    </Stack.Navigator>
  );
};
export default AppStack;
