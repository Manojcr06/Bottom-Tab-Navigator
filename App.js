import * as React from "react";
import { Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Prices from "./components/Prices";
import Transfer from "./components/Transfer";
import Settings from "./components/Settings";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          style: {
            position: "absolute",
            elevation: 0,
            backgroundColor: "white",
            borderRadius: 15,
            height: 90,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Image
                  source={require("./assets/explore.png")}
                  resizeMode="contain"
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: focused ? "black" : "gray",
                  }}
                />
                <Text
                  style={{ color: focused ? "black" : "gray", fontSize: 10 }}
                >
                  Explore
                </Text>
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Portfolio"
          component={Portfolio}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Image
                  source={require("./assets/requirements.png")}
                  resizeMode="contain"
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: focused ? "black" : "gray",
                  }}
                />
                <Text
                  style={{ color: focused ? "black" : "gray", fontSize: 10 }}
                >
                  Requirements
                </Text>
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="transfer"
          component={Transfer}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Image
                  source={require("./assets/chat.png")}
                  resizeMode="contain"
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: focused ? "black" : "gray",
                  }}
                />
                <Text
                  style={{ color: focused ? "black" : "gray", fontSize: 10 }}
                >
                  Chat
                </Text>
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Prices"
          component={Prices}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Image
                  source={require("./assets/orders.png")}
                  resizeMode="contain"
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: focused ? "black" : "gray",
                  }}
                />
                <Text
                  style={{ color: focused ? "black" : "gray", fontSize: 10 }}
                >
                  Orders
                </Text>
              </View>
            ),
          }}
        />

        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <Image
                  source={require("./assets/profile.png")}
                  resizeMode="contain"
                  style={{
                    width: 20,
                    height: 20,
                    tintColor: focused ? "black" : "gray",
                  }}
                />
                <Text
                  style={{ color: focused ? "black" : "gray", fontSize: 10 }}
                >
                  Profile
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
