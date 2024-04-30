import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Modal, Alert, Text, Pressable} from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {addPost} from '../redux/stateSlice/postsSlice'; // 假设你的actions文件已定义addPost



function AddPostScreen({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const handlePost = () => {
    dispatch(addPost({title, content}));
    setTitle('');
    setContent('');
    // setVisible(false);
    navigation.goBack()
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Content"
        value={content}
        onChangeText={setContent}
        multiline
      />
      <Button title="Commit" onPress={handlePost} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // margin:50,
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  input: {
    marginBottom: 10,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default AddPostScreen;
