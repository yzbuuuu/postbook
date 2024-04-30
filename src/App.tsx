/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, createContext, useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Provider, useDispatch} from 'react-redux';

import Navigation from './navigation/AppNavigator';
import PostScreen from './screens/PostScreen';
import DetailsScreen from './screens/DetailsScreen';
import {createStackNavigator} from '@react-navigation/stack';
import store from './redux/store';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AddPostScreen from './components/AddPostScreen';
import { Ionicons } from '@expo/vector-icons';
import {fetchPosts} from './redux/actions';

const HomeStack = createStackNavigator();

const Tab = createBottomTabNavigator();

// function HomeStackScreen() {
//   return (
//     <HomeStack.Navigator>
//       <HomeStack.Screen name="Home" component={PostScreen} />
//       <HomeStack.Screen
//         name="Post"
//         component={DetailsScreen}
//         options={({route}) => ({
//           headerRight: () => (
//             <Button onPress={() => route.params?.updatePost()} title="Edit" />
//           ),
//         })}
//       />
//     </HomeStack.Navigator>
//   );
// }

function App(): React.JSX.Element {

  return (
    <Provider store={store}>
      <Navigation/>
    </Provider>
  );
}

export default App;
