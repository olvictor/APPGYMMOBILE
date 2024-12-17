import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { MMKV } from 'react-native-mmkv';
import { View } from 'react-native-reanimated/lib/typescript/Animated';
import Welcome from './welcome';


export default function TabLayout() {
  const colorScheme = useColorScheme();
  const storage = new MMKV({id:'gymapp'})
  const user = storage.getString('user')
  console.log(user)

if (user === undefined) {
  return <Welcome /> 
}
return (
  <Tabs
    screenOptions={{
      tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      headerShown: false,
    }}
  >
    <Tabs.Screen
      name="index"
      options={{
        title: 'Home',
        tabBarIcon: ({ color, focused }) => (
          <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
        ),
      }}
    />
    <Tabs.Screen
      name="exercise"
      options={{
        title: 'Exercise',
        tabBarIcon: ({ color, focused }) => (
          <TabBarIcon name={focused ? 'barbell' : 'barbell-outline'} color={color} />
        ),
      }}
    />
    <Tabs.Screen
      name="calendar"
      options={{
        title: 'Calendar',
        tabBarIcon: ({ color, focused }) => (
          <TabBarIcon name={focused ? 'calendar' : 'calendar-outline'} color={color} />
        ),
      }}
    />
    <Tabs.Screen
      name="progress"
      options={{
        title: 'Progress',
        tabBarIcon: ({ color, focused }) => (
          <TabBarIcon name={focused ? 'bar-chart' : 'bar-chart-outline'} color={color} />
        ),
      }}
    />
  </Tabs>
);
  
}