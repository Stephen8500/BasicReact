import React from "react";
import { StyleSheet, View, Text } from "react-native-web";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import GraphScreen from "./screens/GraphScreen";
import HomeScreen from "./screens/HomeScreen";


const Tab = createBottomTabNavigator();

export default function BottomTab() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName;
                    let iconColor;

                    if (route.name === "Home") {
                        iconName = "home-outline";
                        iconColor = focused ? "#0946AC" : "#8e8e93";
                    } else if (route.name === "Graph") {
                        iconName = "analytics-outline";
                        iconColor = focused ? "#0946AC" : "#8e8e93";
                    }

                    return <Ionicons name={iconName} size={size} color={iconColor} />;
                }
            })}
            
        >
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="Graph" component={GraphScreen}/>
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({})