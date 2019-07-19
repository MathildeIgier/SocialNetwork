import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';

import styles from './RankingStyles';
import { imageStar } from '../../Assets/Images';

export default function Ranking({ rank }) {
  function getStars() {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      const star = i >= rank ? imageStar.filled : imageStar.unfilled;
      stars.push(star);
    }
    return stars;
  }

  return (
    <View style={styles.starsContainer}>
      <FlatList
        horizontal={true}
        data={getStars()}
        renderItem={({ item }) => <Image style={styles.star} source={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
