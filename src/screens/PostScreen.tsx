import React, {useContext, useState} from 'react';
import {View, TouchableOpacity, Text, ScrollView} from 'react-native';
import {PostContext} from '../services/PostContext';
import PostPreview from '../components/PostPreview';
import { useSelector } from 'react-redux';

const PostScreen = ({navigation}) => {
  const posts = useSelector(state => state.posts);
  return (
    <View>
        <ScrollView>
      {posts.map(post => (
        <PostPreview id ={post.id} isFavorited= {false} post={post} navigation = {navigation}/>
      ))}
      </ScrollView>
    </View>
  );
};



export default PostScreen;
