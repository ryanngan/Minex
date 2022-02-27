import { StyleSheet, Text, View } from 'react-native';
import {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen/HomeScreen.js';

// var data = {
//   2022 : {2:{27:[{"Merchant":"NTUC", "Date":"28-01-2021", "items":["Oreo 3 packs", "Honey Stars 500g"], "qty":[1,1], "price":[2.5, 6.55], "catg":"Shopping", "time":"12:00"}]}},
//   2021 : {"Jan":{30:[{"Merchant":"NTUC", "Date":"28-01-2021", "items":["Oreo 3 packs", "Honey Stars 500g"], "qty":[1,1], "price":[2.5, 6.55], "catg":"Shopping", "time":"12:00"}]}, "Feb":{}, "Mar":{}, "Apr":{}, "May":{}, "Jun":{}, "Jul":{}, "Aug":{}, "Sep":{}, "Oct":{}, "Nov":{}, "Dec":{}},
//   2020 : {"Jan":{}, "Feb":{}, "Mar":{}, "Apr":{}, "May":{}, "Jun":{}, "Jul":{}, "Aug":{}, "Sep":{}, "Oct":{}, "Nov":{}, "Dec":{}},
//   };





function HomeScreenf() {
  return (
    <HomeScreen></HomeScreen>
  );
}

function GrpSplitScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    </View>
  );
}

function AddReceipt() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Add!</Text>
    </View>
  );
}

function InvestmentScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tips!</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreenf} />
        <Tab.Screen name="Split" component={GrpSplitScreen} />
        <Tab.Screen name=" " component={AddReceipt} />
        <Tab.Screen name="Tips" component={InvestmentScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: 'black',
    
  },
});
