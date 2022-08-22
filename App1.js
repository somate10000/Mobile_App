import React from "react";
import styled from "styled-components";
import { Entypo } from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./components/screens/HomeScreen";
import LiveScreen from "./components/screens/LiveScreen";
import ProfileScreen from "./components/screens/ProfileScreen";
import GameScreen from "./components/screens/GameScreen";

const AppStack = createStackNavigator();
const TabNav = createBottomTabNavigator();

const tabBarOptions = {
  tabBarShowLabel: false,
  style: {
    backgroundColor: "#ddc8be",
  },
  tabBarStyle: {
    backgroundColor: "#343434",
    borderTopColor: "#343434",
    paddingBottom: 26,
  },
};

const TabNavScreen = () => {
  return (
    <TabNav.Navigator
      //tabBarShowLabel={false}

      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#343434",
          borderTopColor: "#343434",
          paddingBottom: 2,
        },
        tabBarIcon: ({ focused }) => {
          let iconName;

          switch (route.name) {
            case "HomeScreen":
              iconName = "home";
              break;

            case "LiveScreen":
              iconName = "game-controller";
              break;

            case "ProfileScreen":
              iconName = "user";
              break;

            default:
              iconName = "home";
              break;
          }

          return (
            <TabBarIconContainer focused={focused}>
              <Entypo name={iconName} size={24} color="#ffffff" />
            </TabBarIconContainer>
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
  return (
    <NavigationContainer>
      <AppStack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="App" component={TabNavScreen} />
        <AppStack.Screen name="GameScreen" component={GameScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

const TabBarIconContainer = styled.View`
  background-color: ${(props) => (props.focused ? "#819ee5" : "#343434")};
  padding: 2px 16px;
  border-radius: 22px;
`;
