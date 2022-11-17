// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { ApolloProvider } from "@apollo/client";
import { NativeBaseProvider } from "native-base";
import client from "./config/apollo";
// import Home from "./screens/Home";
// import Store from "./screens/Store";
// import Detail from "./screens/Detail";
import TabNavigator from "./navigators/TabNavigator";

// const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NativeBaseProvider>
        <NavigationContainer>
          {/* <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Items" component={Store} />
          <Tab.Screen name="Detail" component={Detail} />
        </Tab.Navigator> */}
          <TabNavigator />
        </NavigationContainer>
      </NativeBaseProvider>
    </ApolloProvider>
  );
}
