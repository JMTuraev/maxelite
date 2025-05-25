import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Pressable } from 'react-native';

// SVG icon imports (path to'g'ri bo'lishi kerak)
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

// Custom TabBarButton (dumaloq bosilish effektsiz)
function NoRippleTabBarButton(props) {
  return (
    <Pressable
      {...props}
      android_ripple={null}
      style={[
        { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' },
        props.style,
      ]}
    >
      {props.children}
    </Pressable>
  );
}

export default function MainNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#08080A',
          borderTopWidth: 0,
          height: 86,
          elevation: 0,
          borderTopLeftRadius: 28,
          borderTopRightRadius: 28,
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          overflow: 'hidden',
        },
        tabBarItemStyle: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        },
        tabBarIconStyle: {
          width: 46,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
        },
        tabBarButton: (props) => <NoRippleTabBarButton {...props} />, // <-- highlight o'chiriladi
        tabBarIcon: ({ focused }) => {
          if (route.name === 'Discover') {
            return focused
              ? <CompassActive width={44.3} height={46.7} />
              : <Compass width={44.3} height={46.7} />;
          }
          if (route.name === 'Moments') {
            return focused
              ? <MomentsActive width={44.3} height={46.7} />
              : <Moments width={44.3} height={46.7} />;
          }
          if (route.name === 'Chats') {
            return focused
              ? <ChatsActive width={44.3} height={46.7} />
              : <Chats width={44.3} height={46.7} />;
          }
          if (route.name === 'Profile') {
            return focused
              ? <ProfileActive width={44.3} height={46.7} />
              : <Profile width={44.3} height={46.7} />;
          }
        },
      })}
    >
      <Tab.Screen name="Discover" component={DiscoverScreen} />
      <Tab.Screen name="Moments" component={MomentsScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Chats" component={ChatsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
