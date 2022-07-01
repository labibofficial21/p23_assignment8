import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import SettingScreen from './SettingScreen';

const Tab = createBottomTabNavigator();

const Router = () => (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
            <Tab.Screen name="Setting" component={SettingScreen} />
        </Tab.Navigator>
    </NavigationContainer>
)

export default Router