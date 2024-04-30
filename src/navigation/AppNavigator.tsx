import React, {useContext, useEffect} from 'react';
import {Link, NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Pressable} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import {Button} from 'react-native-elements';

import HomeNavigator from './HomeNavigator';
import AddPostScreen from '../components/AddPostScreen';
import UserScreen from '../screens/UserScreen';
import {useDispatch} from 'react-redux';
import {fetchPosts} from '../redux/actions';
import { fetchPostsStart } from '../redux/stateSlice/postsSlice';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostsStart());
  }, [dispatch]);

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="HomeStack"
          component={HomeNavigator}
          options={{
            title: 'Home',
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Another"
          component={UserScreen}
          options={{title: 'test'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
