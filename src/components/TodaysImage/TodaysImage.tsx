import {StyleSheet, Text, View} from 'react-native';
import {PostImage} from '../../types';
import {FC} from 'react';

const TodaysImage: FC<PostImage> = () => {
  return (
    <View style={styles.container}>
      <Text>TodaysImage</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default TodaysImage;
