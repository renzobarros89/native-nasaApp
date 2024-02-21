import {FC} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {PostImage as PostImageTypes} from '../../types';
import PostImage from '../PostImage';

const LastFiveDaysImages: FC<{postImages?: PostImageTypes[]}> = ({
  postImages,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Las 5 Days</Text>
      <ScrollView style={styles.content}>
        {postImages?.map(postImage => (
          <PostImage key={`post-image-${postImage.title}`} {...postImage} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 8,
  },
  content: {
    paddingHorizontal: 24,
  },
  title: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 18,
  },
});

export default LastFiveDaysImages;
