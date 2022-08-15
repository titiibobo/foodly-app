import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { RGBwhite, RGBlightblack, RGBorange, button_3, font_P2} from '../styling/globalStyles'
import {TouchableOpacity,Text, StyleSheet} from 'react-native';

// Bottom Menu imports
import HomeScreen from '../screens/Tabs/HomeScreen';
import AddScreen from '../screens/Tabs/AddScreen';
import ScanScreen from '../screens/Tabs/ScanScreen';
import HistoryScreen from '../screens/Tabs/HistoryScreen';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function TabStack() {
  const navigation = useNavigation();
  return (
    <Tab.Navigator 
    initialRouteName= "Home"
 
    screenOptions={{
      headerTitleAlign: 'center',
      headerTitleStyle: {
        // fontFamily: "LatoBlack"
      },
      // headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {backgroundColor: RGBwhite},
      tabBarInactiveTintColor: RGBlightblack,
      tabBarActiveTintColor: RGBorange,
    }}
    >
      <Tab.Screen name="Scan" component={ScanScreen} 
      options={{ 
        headerShown: false,
        tabBarIcon: ({color, size}) => (
        <MaterialIcons
        name="qr-code"
        size={size}
        color={color}
      /> 
      ),
        }}
      />
      <Tab.Screen name="History" component={HistoryScreen} 
      options={{ 
        tabBarIcon: ({color, size}) => (
        <MaterialIcons
        name="history"
        size={size}
        color={color}
      /> 
      ),
        }}
      />
      <Tab.Screen name="Home" component={HomeScreen} 
      options={{ 
        headerStyle: {
          backgroundColor: RGBorange,
        },
        headerTintColor: RGBwhite,
        headerTitleStyle: {
          fontWeight: 'bold',
          // fontFamily: 'LatoBold'
        },
      tabBarIcon: ({color, size}) => (
      <MaterialIcons
      name="dashboard"
      size={size}
      color={color}
    /> 
    ),
      }}
      />
      <Tab.Screen name="List" component={AddScreen} 
      options={{ 
        tabBarIcon: ({color, size}) => (
        <MaterialIcons
        name="add-circle-outline"
        size={size}
        color={color}
      /> 
      ),
      headerRight: () => (
        <TouchableOpacity
        style={button_3}
        onPress={() => navigation.navigate("AddNewScreen")}>
          <Text style={font_P2}>Add</Text>
        </TouchableOpacity>
      )
        }}
      />
     
      </Tab.Navigator>
);
}

const styles = StyleSheet.create({
  button_3,
  font_P2
});