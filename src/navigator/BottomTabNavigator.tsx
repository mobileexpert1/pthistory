import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Colors, Images} from '../themes';
import {hp} from '../themes/Metrix';
import Chat from '../screens/Chat/Chat';
import MyDocs from '../screens/Docs/MyDocs';
import Profile from '../screens/Profile/Profile';
import PatientHistory from '../screens/Home/PatientHistory';
import {Routes} from '../utils/Routes';
import ImageIcon from '../components/common/ImageIcon';

// Creating a bottom tab navigator instance
const Tab = createBottomTabNavigator();

// Defining the main tabs navigation component
function MyTabs() {
  return (
    // Setting up the bottom tab navigator
    <Tab.Navigator
      initialRouteName={Routes.Tabs.Home}
      screenOptions={{
        tabBarActiveTintColor: Colors.pink, // Set active tab icon color
        headerShown: false, // Hide header
      }}>
      {/* Configuring the screens in tab */}
      <Tab.Screen
        name={Routes.Screens.PatientHistory}
        component={PatientHistory}
        options={{
          tabBarLabel: Routes.Tabs.Home,
          tabBarIcon: ({color, size, focused}) => (
            <ImageIcon
              source={focused ? Images.pHouse : Images.gHouse} // Set icon image based on focus
              height={hp(3)}
              width={hp(3)}
              enableRadius={false}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.Tabs.MyDocs}
        component={MyDocs}
        options={{
          tabBarLabel: Routes.Tabs.MyDocs,
          tabBarIcon: ({color, size, focused}) => (
            <ImageIcon
              source={focused ? Images.pDoc : Images.gDoc}
              height={hp(3)}
              width={hp(3)}
              enableRadius={false}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.Tabs.Messaging}
        component={Chat}
        options={{
          tabBarLabel: Routes.Tabs.Messaging,
          tabBarIcon: ({color, size, focused}) => (
            <ImageIcon
              source={focused ? Images.pMessage : Images.gMessage}
              height={hp(3)}
              width={hp(3)}
              enableRadius={false}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tab.Screen
        name={Routes.Tabs.Profile}
        component={Profile}
        options={{
          tabBarLabel: Routes.Tabs.MyDocs,
          tabBarIcon: ({color, size, focused}) => (
            <ImageIcon
              source={focused ? Images.pUser : Images.gUser}
              height={hp(3)}
              width={hp(3)}
              enableRadius={false}
              resizeMode="contain"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
