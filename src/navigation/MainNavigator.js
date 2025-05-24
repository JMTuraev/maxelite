import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// SVG icon importlari
import CompassActive from '../assets/icons/compass_active.svg';
import Compass from '../assets/icons/compass.svg';
import MomentsActive from '../assets/icons/moments_active.svg';
import Moments from '../assets/icons/moments.svg';
import ChatsActive from '../assets/icons/chats_active.svg';
import Chats from '../assets/icons/chats.svg';
import ProfileActive from '../assets/icons/profile_active.svg';
import Profile from '../assets/icons/profile.svg';

// Screens
import DiscoverScreen from '../screens/DiscoverScreen';
import MomentsScreen from '../screens/MomentsScreen';
import ChatsScreen from '../screens/ChatsScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function MainNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#191919',
          borderTopWidth: 0,
          height: 86,
          elevation: 0,
        },
        tabBarIcon: ({ focused }) => {
          if (route.name === 'Discover') {
            return focused
              ? <CompassActive width={44} height={44} />
              : <Compass width={44} height={44} />;
          }
          if (route.name === 'Moments') {
            return focused
              ? <MomentsActive width={44} height={44} />
              : <Moments width={44} height={44} />;
          }
          if (route.name === 'Chats') {
            return focused
              ? <ChatsActive width={44} height={44} />
              : <Chats width={44} height={44} />;
          }
          if (route.name === 'Profile') {
            return focused
              ? <ProfileActive width={44} height={44} />
              : <Profile width={44} height={44} />;
          }
        }
      })}
    >
      <Tab.Screen name="Discover" component={DiscoverScreen} />
      <Tab.Screen name="Moments" component={MomentsScreen} />
      <Tab.Screen name="Chats" component={ChatsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
