import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './CardStyles';

import Ranking from '../Ranking/Ranking';

export default function Card({ image, firstname, lastname, speciality, rank, id, onPress }) {
  return (
    <View>
      <View style={styles.cardContainer}>
        <View style={styles.imageContainer}>
          <Image source={image} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.name}>
            {firstname} {lastname}
          </Text>
          <Text style={styles.speciality}>{speciality}</Text>
          <Ranking rank={rank} />
          <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.textButton}>Show more</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
