import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigator from "./StackNavigator";
import Favorite from "../screens/Favorite";
import Ionicons from "@expo/vector-icons/Ionicons";

const TabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        // tabBarBadge: 3,
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Favorite") {
            iconName = focused ? "heart" : "heart-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "black",
      })}
    >
      <Tab.Screen name="Home" component={StackNavigator} />
      <Tab.Screen name="Favorite" component={Favorite} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
