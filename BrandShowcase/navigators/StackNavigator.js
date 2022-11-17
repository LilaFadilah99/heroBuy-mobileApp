import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Detail from "../screens/Detail";
import Store from "../screens/Store";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home Screen" component={Home} />
      <Stack.Screen name="Items" component={Store} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
