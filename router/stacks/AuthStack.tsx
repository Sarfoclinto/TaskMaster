import SignIn from "../../Screens/SignIn";
import SignUp from "../../Screens/SignUp";
import { Stack } from "./AppStack";

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};
export default AuthStack;
