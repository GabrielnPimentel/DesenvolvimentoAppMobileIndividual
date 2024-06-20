import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../screens/login';
import { BottomTabsRoutes } from './BottomTabsRoutes';

export type ParametrosRota = {
  StackLogin: {name: string};
  StackTabsPages: {name: string};
}

const Stack = createNativeStackNavigator<ParametrosRota>();

export function StackRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>

        <Stack.Screen name="StackLogin" component={Login}/>
        <Stack.Screen name="StackTabsPages" component={BottomTabsRoutes} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}
