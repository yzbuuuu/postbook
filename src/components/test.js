import React, {useState, useRef} from 'react';
import {
  Modal,
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  Animated,
  TextInput
} from 'react-native';
// import {
//   PanGestureHandler,
//   State,
//   TextInput,
// } from 'react-native-gesture-handler';

// const screenHeight = Dimensions.get('window').height;

const HomeScreen = () => {
  // const [visible, setVisible] = useState(false);
  // const translateY = useRef(new Animated.Value(screenHeight)).current;

  // const onGestureEvent = Animated.event(
  //   [{nativeEvent: {translationY: translateY}}],
  //   {useNativeDriver: true},
  // );

  // const onHandlerStateChange = event => {
  //   if (event.nativeEvent.oldState === State.ACTIVE) {
  //     Animated.spring(translateY, {
  //       toValue: 0,
  //       tension: 80,
  //       friction: 12,
  //       useNativeDriver: true,
  //     }).start();

  //     // Check the vertical gesture direction and distance
  //     if (event.nativeEvent.translationY > 100) {
  //       setVisible(false); // Close the modal if swiped down significantly
  //     }
  //   }
  // };

  // const openModal = () => {
  //   setVisible(true);
  //   Animated.timing(translateY, {
  //     toValue: 0,
  //     duration: 500,
  //     useNativeDriver: true,
  //   }).start();
  // };

  const [title, setTitle] = useState('');

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}></TextInput>
      {/* <Modal
        animationType="none"
        transparent={true}
        visible={visible}
        onRequestClose={() => setVisible(false)}
      >
        <PanGestureHandler
          onGestureEvent={onGestureEvent}
          onHandlerStateChange={onHandlerStateChange}
        >
          <Animated.View
            style={[
              styles.modalView,
              {
                transform: [{
                  translateY: translateY.interpolate({
                    inputRange: [0, screenHeight],
                    outputRange: [screenHeight * 1/5, screenHeight],
                    extrapolate: 'clamp',
                  })
                }]
              }
            ]}
          >
            <Text style={styles.modalText}>Swipe down to close</Text>
            <Button title="Click Me" onPress={() => console.log('Button tapped')} />
          </Animated.View>
        </PanGestureHandler>
      </Modal>
      <Button title="Open Modal" onPress={openModal} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  // modalView: {
  //   position: 'absolute',
  //   bottom: 0,
  //   width: '100%',
  //   height: (screenHeight * 4) / 5,
  //   backgroundColor: 'white',
  //   borderTopRightRadius: 20,
  //   borderTopLeftRadius: 20,
  //   padding: 20,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default HomeScreen;
