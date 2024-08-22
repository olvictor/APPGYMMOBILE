import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
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
          title: 'exercise',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'barbell' : 'barbell-outline'} color={color} />
          ),
        }}
      />

    <Tabs.Screen
            name="calendar"
            options={{
              title: 'calendar',
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon name={focused ? 'calendar' : 'calendar-outline'} color={color} />
              ),
            }}
    />
    <Tabs.Screen
            name="progress"
            options={{
              title: 'progress',
              tabBarIcon: ({ color, focused }) => (
                <TabBarIcon name={focused ? 'bar-chart' : 'bar-chart-outline'} color={color} />
              ),
            }}
    />
    </Tabs>
  );
}
