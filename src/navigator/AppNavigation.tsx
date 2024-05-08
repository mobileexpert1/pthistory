import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Splash from '../screens/Splash/Splash';
import MyTabs from './BottomTabNavigator';
import {Routes} from '../utils/Routes';

// Creating a stack navigator instance
const Stack = createStackNavigator();

export default function AppNavigation() {
  return (
    // Wrapping the navigation container around the stack navigator to manage navigation state
    <NavigationContainer>
      {/* Setting up stack navigator with screen configurations */}
      <Stack.Navigator>
        {/* Configuring the screens */}
        <Stack.Screen
          name={Routes.Screens.Splash}
          options={{headerShown: false}}
          component={Splash}
        />
        <Stack.Screen
          name={Routes.Screens.Root}
          options={{headerShown: false}}
          component={MyTabs}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
