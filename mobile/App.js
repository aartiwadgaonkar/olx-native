//  import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { Badge, PaperProvider, Text } from "react-native-paper";

// export default function App() {
//   const Stack = createNativeStackNavigator();
//   return <PaperProvider>
//      <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={HomeScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   </PaperProvider>;
// }

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Splash1 from "./splash/Splash1";
import { NavigationContainer } from "@react-navigation/native";
import Splash2 from "./splash/Splash2";
import Splash3 from "./splash/Splash3";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaperProvider } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import Auth from "./screen/Auth";

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <PaperProvider>
      <NavigationContainer>
        <StatusBar hidden />
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Splash1" component={Splash1} />
          <Stack.Screen name="Splash2" component={Splash2} />
          <Stack.Screen name="Splash3" component={Splash3} />
          <Stack.Screen name="Auth" component={Auth} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;

const styles = StyleSheet.create({});
