import React from "react";
import { View, ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./components/screens/HomeScreen";
import LiveScreen from "./components/screens/LiveScreen";
import ProfileScreen from "./components/screens/ProfileScreen";
import Settings from "./components/screens/Settings";
import Starter from "./components/screens/Starter";

const AppStack = createStackNavigator();
const TabNav = createBottomTabNavigator();

const TabNavScreen = () => {
  return (
    <TabNav.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          borderTopWidth: 2,
          borderTopColor: "white",
          height: 120,
        },

        tabBarIcon: ({ focused }) => {
          let iconName;

          switch (route.name) {
            case "HomeScreen":
              iconName = "home";
              break;

            case "LiveScreen":
              iconName = "bookmark";
              break;

            case "ProfileScreen":
              iconName = "bell";
              break;

            default:
              iconName = "home";
              break;
          }

          return (
            <View
              focused={focused}
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <MaterialCommunityIcons
                name={iconName}
                size={30}
                color={
                  focused ? "rgba(24, 154, 180, 1)" : "rgba(212, 241, 244, 1)"
                }
              />
              <View
                style={{
                  height: 5,
                  width: 5,
                  marginTop: 2,
                  borderRadius: 5,
                  backgroundColor: focused ? "rgba(24, 154, 180, 1)" : "white",
                }}
              />
            </View>
          );
        },
      })}
    >
      <TabNav.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <TabNav.Screen
        name="LiveScreen"
        component={LiveScreen}
        options={{ headerShown: false }}
      />
      <TabNav.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </TabNav.Navigator>
  );
};

export default function App() {
  const [loaded] = useFonts({
    poppins: require("./assets/fonts/Poppins-Regular.ttf"),
    PoppinsM: require("./assets/fonts/Poppins-Medium.ttf"),
  });

  if (!loaded) {
    return (
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size="large" color={"white"} />
      </View>
    );
  }
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Starter" component={Starter} />
        <AppStack.Screen name="App" component={TabNavScreen} />
        <AppStack.Screen name="Settings" component={Settings} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
