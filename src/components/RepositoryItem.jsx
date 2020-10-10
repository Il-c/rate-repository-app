import React from 'react';
import { View, StyleSheet, Image } from "react-native";
import theme from '../theme';
import Text from './Text';

const numberStyles = {
  notation: 'compact',
  maximumFractionDigits: 1
};
const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor:'white'
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  infosContainer:{
    flexGrow:1,
    flex:1,
    alignItems: 'flex-start',
  },
  numbersContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  contentItem: { 
    flexDirection: 'row',
    color: 'white',
    padding: 5,
  },
  languageItem: {
    alignItems: 'flex-start',
    borderRadius: 5 ,
    backgroundColor: theme.colors.primary,
  },
  imageContainer: {
    padding: 15
  },
  image: {
    borderRadius: 5,
    width: 40,
    height: 40
  }
});

const RepositoryItem = ({item}) => {
  return(
    <View style={styles.cardContainer}>

      <View style={styles.rowContainer}>
        <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: item.ownerAvatarUrl}}/>
        </View>
        <View style={styles.infosContainer}>
          <View style={styles.contentItem}>
            <Text fontWeight="bold" >{item.fullName}</Text>
          </View>
          <View style={styles.contentItem}>
            <Text color='textSecondary'> {item.description}</Text>
          </View>
          <View style={styles.contentItem}>
          <View style={styles.languageItem}>
            <Text style={styles.contentItem}>{item.language}</Text>
          </View>
          </View>
        </View>
      </View>

      <View style={styles.numbersContainer}>
        <View >
          <Text fontWeight="bold">{item.stargazersCount.toLocaleString('en-US',numberStyles)}</Text>
          <Text>Stars</Text>
        </View>
        <View >
          <Text fontWeight="bold">{item.forksCount.toLocaleString('en-US',numberStyles)}</Text>
          <Text>Forks</Text>
        </View>
        <View >
          <Text fontWeight="bold">{item.reviewCount.toLocaleString('en-US',numberStyles)}</Text>
          <Text>Reviews</Text>
        </View>
        <View >
          <Text fontWeight="bold">{item.ratingAverage}</Text>
          <Text>Rating</Text>
        </View>
      </View>

    </View>
  );
};
export default RepositoryItem;