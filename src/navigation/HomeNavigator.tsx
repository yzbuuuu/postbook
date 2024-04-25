import React, {createContext, useCallback, useContext, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';

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
import ModalScreen from '../screens/ModalScreen';

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

const HomeStack = createStackNavigator();
const addPostVisibleContext = createContext(false);

const HeaderRight = React.memo(({setModalVisible, modalVisible}) => (
  <>
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>
          <AddPostScreen setVisible={setModalVisible} />
        </Text>
      </View>
    </Modal>
    <Button
      onPress={() => setModalVisible(true)}
      title="Post"
      disabled={modalVisible}
    />
  </>
));

const HomeNavigator = ({navigation}) => {
  const [addPostVisible, setAddPostVisible] = useState(false);

  // const renderHeaderRight = useCallback(() => {
  //   return (
  //     <HeaderRight
  //       setModalVisible={setAddPostVisible}
  //       modalVisible={addPostVisible}
  //     />
  //   );
  // }, [setAddPostVisible, addPostVisible]);

  return (
    <HomeStack.Navigator mode="modal">
      <HomeStack.Screen
        name="Home"
        component={PostScreen}
        options={{
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate('Modal')}
              title="post?"
            />
          ),
        }}
      />
      <HomeStack.Screen name="Modal" component={ModalScreen} />
      <HomeStack.Screen
        name="Post"
        component={DetailsScreen}
        options={({route}) => ({
          headerRight: () => (
            <Button onPress={() => route.params?.updatePost()} title="Edit" />
          ),
        })}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
