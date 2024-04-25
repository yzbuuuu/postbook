import React, {useContext} from 'react';
import {Link, NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Button } from 'react-native-elements';

import HomeNavigator from './HomeNavigator';
import AddPostScreen from '../components/AddPostScreen';
import HomeScreen from '../components/test';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
     <Tab.Navigator>
          <Tab.Screen
            name="HomeStack"
            component={HomeNavigator}
            options={{
              title: 'Home',
              headerShown: false,
              headerRight: () => <Button title="Post" />,
            }}

          />
          <Tab.Screen
            name="Another"
            component={HomeScreen}
            options={{title: 'test'}}
          />
        </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
