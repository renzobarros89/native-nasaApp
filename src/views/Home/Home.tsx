import {StyleSheet, View} from 'react-native';
import Header from '../../components/Header';

import fetchApi from '../../utils/fetch';
import {useEffect, useState} from 'react';
import TodaysImage from '../../components/TodaysImage';
import {PostImage} from '../../types';

const Home = () => {
  const [todaysImage, setTodaysImage] = useState<PostImage>({});

  useEffect(() => {
    const loadTodayImage = async () => {
      try {
        const todaysImageResponse = await fetchApi();
        setTodaysImage(todaysImageResponse);
      } catch (error) {
        console.log(error);
        setTodaysImage({});
      }
    };

    loadTodayImage().catch(null);
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <TodaysImage {...todaysImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});

export default Home;
