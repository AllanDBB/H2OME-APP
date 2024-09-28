import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Main from "./src/pages/Main/Main";
import Register from "./src/pages/Register/Register";
import LoadingScreen from "./src/pages/loading/loading";
import DrawerNavigator from "./src/navigation/DrawerNavigator";

export type RootStackParamList = {
  Main: undefined;
  Register: undefined;
  DrawerNavigator: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
