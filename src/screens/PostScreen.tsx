import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  RefreshControl,
  StyleSheet,
} from 'react-native';
import PostPreview from '../components/PostPreview';
import {useDispatch, useSelector} from 'react-redux';
import {refreshingPosts} from '../redux/stateSlice/postsSlice';

const PostScreen = ({navigation}) => {
  const posts = useSelector(state => state.posts.posts);
  const [refreshing, setRefreshing] = useState(false);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   async function fetchPosts() {
  //     let res = fetch('https://jsonplaceholder.typicode.com/posts')
  //       .then(response => response.json())
  //       .then(data=>{
  //         const transformedData = data.map(post => ({
  //           title: post.title,
  //           content: post.body,
  //         }))
  //       });
  //     console.log(res);
  //   }
  // });

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(refreshingPosts());
    setRefreshing(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {posts.map(post => (
          <PostPreview
            id={post.id}
            isFavorited={false}
            post={post}
            navigation={navigation}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1, // 使 ScrollView 填充所有可用空间
  },
});

export default PostScreen;
