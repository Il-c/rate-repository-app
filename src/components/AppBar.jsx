import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import Text from './Text';
import theme from '../theme';
import { Link } from "react-router-native";


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBar,
  },
  appBarItem: {
  },
  text: {
    color: 'white',
    padding: 20
  }
});

const AppBar = () => {
  return( 
    <View style={styles.container}>
      <ScrollView  horizontal={true}>

        <Link to="/" component={TouchableWithoutFeedback} >
          <Text style={styles.text}>{'Repositories'}</Text>
        </Link>
        
        <Link to="/login" component={TouchableWithoutFeedback} >
          <Text style={styles.text}>{'Sign in'}</Text>
        </Link>

      </ScrollView>
    </View>
  );
};

export default AppBar;