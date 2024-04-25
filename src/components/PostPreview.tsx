import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Animated,
} from 'react-native';
import {useContext} from 'react';
import DetailsScreen from '../screens/DetailsScreen';
import {Swipeable} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';
import {deletePost} from '../store';

interface PostType {
  id: number;
  isFavorited: false;
  title: string;
  context: string;
}

const PostPreview: React.FC<{post: PostType; navigation: any}> = ({
  post,
  navigation,
}) => {
  const dispatch = useDispatch();

  const {title, context} = post;
  const onPress = () => {
    navigation.navigate('Post', {post: post});
    console.log('Card Pressed!');
  };

  const rightSwipeActions = () => {
    return (
      <Animated.View
        style={{width: 80, justifyContent: 'center', alignItems: 'center'}}>
        <Button title="Delete" color="#000" onPress={() => dispatch(deletePost(post.id))} />
      </Animated.View>
    );
  };
  return (
    <Swipeable key={post.id} renderRightActions={rightSwipeActions}>
      <TouchableOpacity style={styles.card} onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.context}>{context}</Text>
      </TouchableOpacity>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  context: {
    fontSize: 14,
    color: '#666',
  },
});

export default PostPreview;
