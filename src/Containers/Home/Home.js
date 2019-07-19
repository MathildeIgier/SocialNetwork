import React from 'react';
import { View, FlatList } from 'react-native';

import dataListProfiles from '../../Fixitures/listProfiles.json';
import { imagesProfile } from '../../Assets/Images';

import Card from '../../Components/Card/Card';

import styles from './HomeStyles';

export default function Home() {
  // Declare a new state variable, which we'll call "count"
  console.log('list ---', dataListProfiles);
  return (
    <View style={styles.containerPage}>
      <FlatList
        data={dataListProfiles.items}
        renderItem={({ item }) => (
          <Card
            image={imagesProfile[item._id - 1]}
            firstname={item.firstname}
            lastname={item.lastname}
            id={item._id}
            speciality={item.speciality}
            rank={item.rank}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

Home.navigationOptions = ({ navigation }) => ({
  title: 'Home'
});
