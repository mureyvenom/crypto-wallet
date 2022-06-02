import React, { ReactNode } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from '../screens/SplashScreen';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import PortfolioScreen from '../screens/PortfolioScreen';

interface ItemProps {
  title: string;
  icon: ReactNode;
  focused?: boolean;
}

const TabItem = ({ title, icon, focused }: ItemProps) => {
  return (
    <View
      style={[
        styles.labelView,
        {
          backgroundColor: focused ? '#000' : undefined,
        },
      ]}>
      {icon}
      <Text style={styles.labelItem}>{title}</Text>
    </View>
  );
};

const Tabs = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Tabs.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#1E1E1E',
            height: Platform.OS === 'ios' ? 120 : 80,
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
            paddingVertical: 15,
            overflow: 'hidden',
            borderColor: '#1E1E1E',
          },
          tabBarShowLabel: false,
          headerShown: false,
        }}>
        <Tabs.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ size, focused }) => (
              <TabItem
                focused={focused}
                icon={<Feather name="home" color="#fff" size={size} />}
                title="Home"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Portfolio"
          component={PortfolioScreen}
          options={{
            tabBarIcon: ({ size, focused }) => (
              <TabItem
                focused={focused}
                icon={<Feather name="briefcase" color="#fff" size={size} />}
                title="Portfolio"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Trade"
          component={SplashScreen}
          options={{
            tabBarIcon: ({ size, focused }) => (
              <TabItem
                focused={focused}
                icon={<FontAwesome name="exchange" color="#fff" size={size} />}
                title="Trade"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Market"
          component={SplashScreen}
          options={{
            tabBarIcon: ({ size, focused }) => (
              <TabItem
                focused={focused}
                icon={
                  <FontAwesome name="bar-chart-o" color="#fff" size={size} />
                }
                title="Market"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Profile"
          component={SplashScreen}
          options={{
            tabBarIcon: ({ size, focused }) => (
              <TabItem
                focused={focused}
                icon={<Feather name="user" color="#fff" size={size} />}
                title="Profile"
              />
            ),
          }}
        />
      </Tabs.Navigator>
    </>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  labelView: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  labelItem: {
    fontSize: 10,
    color: '#fff',
    marginTop: 8,
  },
});
