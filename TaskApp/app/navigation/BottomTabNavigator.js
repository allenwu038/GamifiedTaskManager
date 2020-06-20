import * as React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import LoginScreen from "../screens/LoginScreen";
import CharacterScreen from "../screens/CharacterScreen";
import QuestScreen from "../screens/QuestScreen";
import SettingsScreen from "../screens/SettingsScreen";
import TabBarIcon from "../components/TabBarIcon";
import TaskScreen from "../screens/TaskScreen";
import { useIsFocused } from "@react-navigation/native";

import Colors from "../constants/Colors";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = "Tasks";

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <BottomTab.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions={{
        // activeBackgroundColor: "black"
        activeTintColor: Colors.navActive,
      }}
    >
      <BottomTab.Screen
        name="Tasks"
        component={TaskScreen}
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <MaterialCommunityIcons
              focused={focused}
              name="checkbox-multiple-marked-circle-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <BottomTab.Screen
        name="Quests"
        component={QuestScreen}
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <MaterialCommunityIcons
              focused={focused}
              name="script-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <BottomTab.Screen
        name="Character"
        component={CharacterScreen}
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <MaterialIcons
              focused={focused}
              name="person-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <BottomTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, focused, size }) => (
            <MaterialCommunityIcons
              focused={focused}
              name="settings-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName =
    route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case "Login":
      return "Login";
    case "Settings":
      return "Settings";
    case "Quests":
      return "Quests";
    case "Tasks":
      return "Tasks";
  }
}
