import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch } from 'react-router-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import SignInForm from './SignInForm';

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: '#e1e4e8'
  },
  container: {
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    
    <View style={styles.flexContainer}>
      <AppBar />
      <Switch>
        <Route path="/login" exact>
          <SignInForm/>
        </Route>
        
        <Route path="/" exact>
          <RepositoryList />
        </Route>
        
      </Switch>
    </View>
    
  );
};

export default Main;