import React, {createContext, useCallback, useContext, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { Dimensions } from 'react-native';

import PostScreen from '../screens/PostScreen';
import DetailsScreen from '../screens/DetailsScreen';
import AddPostScreen from '../components/AddPostScreen';

import {
  Button,
  Modal,
  Pressable,
  Alert,
  Text,
  StyleSheet,
  View,
} from 'react-native';
import {Link} from '@react-navigation/native';
import FontAwesome from '@expo/vector-icons/build/FontAwesome';

const HomeStack = createStackNavigator();
const MainStack = createStackNavigator();
const ModalStack = createStackNavigator();

// 主屏幕堆栈，用于非模态页面
function MainStackNavigator({navigation}) {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Home"
        component={PostScreen}
        options={{
          headerRight: () => (
            <Button onPress={() => navigation.navigate('ModalPage')} title="Post" />
          ),
        }}
      />
      <MainStack.Screen
        name="Post"
        component={DetailsScreen}
        options={({route}) => ({
          headerRight: () => (
            <Button onPress={() => route.params?.updatePost()} title="Edit" />
          ),
        })}
      />
    </MainStack.Navigator>
  );
}

// 模态屏幕堆栈，用于模态页面
function ModalStackNavigator({navigation}) {
  return (
    <ModalStack.Navigator>
      <ModalStack.Screen
        name="Modal"
        component={AddPostScreen}
        options={{title: 'Post', headerShown: true}}
      />
    </ModalStack.Navigator>
  );
}

const HomeNavigator = ({navigation}) => {
  const screenHeight = Dimensions.get('window').height;

  return (
    <HomeStack.Navigator mode="modal">
      <HomeStack.Screen
        name="main"
        component={MainStackNavigator}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="ModalPage"
        component={ModalStackNavigator}
        options={{
          headerShown: false,
          gestureEnabled: true,
          gestureResponseDistance: screenHeight, // 可以在顶部 200px 的区域内下滑关闭
        }}
      />
    </HomeStack.Navigator>
  );
};
const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default HomeNavigator;
