import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';
import PostPreview from '../components/PostPreview';
import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Markdown from 'react-native-markdown-display';
import {useDispatch} from 'react-redux';
import {updatePost} from '../redux/stateSlice/postsSlice';

interface PostType {
  title: string;
  content: string;
}

type RootStackParamList = {
  Post: {
    post: PostType;
  };
};

type DetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Post'
>;
type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Post'>;

interface DetailsScreenProps {
  route: DetailsScreenRouteProp;
  navigation: DetailsScreenNavigationProp;
}

function textToMarkdown(title, content) {
  const markdownTitle = `## ${title}\n`; // 使用两个 '#' 作为 Markdown 的二级标题
  const markdownContent = `${content}\n`; // 内容后跟一个换行
  return markdownTitle + markdownContent;
}

const DetailsScreen = ({route, navigation}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();
  const {post} = route.params;

  useEffect(() => {
    setTitle(post.title);
    setContent(post.content);
  }, [post]);
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={toggleEdit} title={isEditing ? 'Done' : 'Edit'} />
      ),
    });
  }, [navigation, isEditing, title, content]);

  const toggleEdit = () => {
    if (isEditing) {
      // 当用户点击"Done"
      dispatch(updatePost({id: post.id, title, content}));
    }
    setIsEditing(!isEditing); // 切换编辑状态
  };

  const markdownContent = textToMarkdown(title, content);

  return (
    <ScrollView style={styles.container}>
      {isEditing ? (
        <>
          <TextInput
            style={styles.row}
            value={title}
            onChangeText={setTitle}
            placeholder="Title"
            editable={isEditing}
          />
          <TextInput
            style={styles.row}
            value={content}
            onChangeText={setContent}
            placeholder="Content"
            multiline
            editable={isEditing}
          />
        </>
      ) : (
        <Markdown>{markdownContent}</Markdown>
      )}
    </ScrollView>
  );
};

const markdownStyles = {
  text: {
    // 适用于所有文本
    color: '#333',
  },
  heading1: {
    // 适用于H1标签
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold',
  },
  paragraph: {
    // 适用于段落
    margin: 10,
  },
  link: {
    // 适用于链接
    color: 'purple',
  },
  listItem: {
    // 适用于列表项
    flexDirection: 'row',
    alignItems: 'center',
  },
  listUnorderedItemIcon: {
    // 无序列表的图标
    fontSize: 20,
    marginRight: 10,
  },
  listOrderedItemIcon: {
    // 有序列表的图标
    fontSize: 20,
    marginRight: 10,
  },
};

const styles = StyleSheet.create({
  row: {
    padding: 4,
    borderBottomColor: 'red',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  container: {
    padding: 10,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
  input: {
    marginBottom: 10,
    padding: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
});

export default DetailsScreen;
