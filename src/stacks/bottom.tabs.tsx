import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from '../screens/SplashScreen';

const Tabs = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={SplashScreen} />
      <Tabs.Screen name="Portfolio" component={SplashScreen} />
      <Tabs.Screen name="Trade" component={SplashScreen} />
      <Tabs.Screen name="Market" component={SplashScreen} />
      <Tabs.Screen name="Profile" component={SplashScreen} />
    </Tabs.Navigator>
  );
};

export default BottomTabs;
