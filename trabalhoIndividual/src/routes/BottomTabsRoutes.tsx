import React from 'react'
import { Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens/home';
import { Profile } from '../screens/profile';

export type TabsParametrosRota = {
  TabHome: {name: string};
  TabProfile: {name: string};
}

const Tab = createBottomTabNavigator();

export function BottomTabsRoutes() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name='TabHome' component={Home} />
      <Tab.Screen name='TabProfile' component={Profile} />
    </Tab.Navigator>
  )
}
