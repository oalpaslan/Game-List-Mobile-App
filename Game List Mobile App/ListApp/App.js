import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import HomeScreen from "./source/screens/HomeScreen";
import ListScreen from "./source/screens/ListScreen";
import UserLogin from "./source/screens/UserLogin";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="UserLogin"
          component={UserLogin}
          options={{
            title: "Login",
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: "black",
            },
          }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Home",
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: "black",
            },
          }}
        />
        <Stack.Screen
          options={{
            title: "List",
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: "black",
            },
          }}
          name="List"
          component={ListScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
