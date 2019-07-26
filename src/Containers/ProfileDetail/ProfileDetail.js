import React from 'react';
import { View, Text, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import profileDetails from '../../Fixitures/ProfileDetails.json';
import { imagesProfile } from '../../Assets/Images';

import Ranking from '../../Components/Ranking/Ranking';
import SessionLine from '../../Components/SessionLine/SessionLine';

import styles from './ProfileDetailStyles';

export default function ProfileDetail() {
  // Declare a new state variable, which we'll call "count"

  return (
    <View style={styles.containerPage}>
      <View style={styles.profileContainer}>
        <Text style={styles.profileName}>
          {profileDetails.firstname} {profileDetails.lastname}
        </Text>
        <Text style={styles.profileSpeciality}>{profileDetails.speciality}</Text>
        <Text style={styles.profilePersonalMessage}>{profileDetails.personalMessage}</Text>
        <Ranking rank={profileDetails.rank} />
      </View>
      <View style={styles.imageContainer}>
        <View style={styles.imageSeparator} />
        <View style={styles.imageCircle}>
          <Image source={imagesProfile[0]} style={styles.profileImage} />
        </View>
      </View>
      <View style={styles.profileSession}>
        <FlatList
          data={profileDetails.sessions}
          horizontal={true}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.sessionsList}>
              <Text style={styles.sessionTitle}>{item.title}</Text>
              <Text style={styles.sessionDescription}>{item.description}</Text>
              <SessionLine value={item.place} icon="ios-pin" />
              <SessionLine value={item.time} icon="ios-time" />
              <SessionLine value={item.price} icon="ios-cash" />
              <SessionLine value={item.participant} icon="ios-contacts" />
            </View>
          )}
        />
      </View>
    </View>
  );
}
