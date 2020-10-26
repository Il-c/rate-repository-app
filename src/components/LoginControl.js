import React from 'react';
import { useApolloClient } from '@apollo/client';
import { useQuery } from '@apollo/react-hooks';
import { AUTHORIZED_USER } from '../graphql/queries';
import {View, TouchableWithoutFeedback,  StyleSheet} from 'react-native';
import Text from './Text';
import { Link } from "react-router-native";
import { useContext } from 'react';
import AuthStorageContext from '../contexts/AuthStorageContext';

const styles = StyleSheet.create({
  
  text: {
    color: 'white',
    padding: 20
  }
});

const LoginControl = () => {
  //const [user, setUser] = useState();
  // eslint-disable-next-line no-unused-vars
  const { data, error, loading } = useQuery(AUTHORIZED_USER, {
    fetchPolicy: 'cache-and-network',
  });
  const authStorage = useContext(AuthStorageContext);
  const apolloClient = useApolloClient();

  const handleLogout = async () => {
    console.log('logout');
    await authStorage.removeAccessToken();
    apolloClient.resetStore();

  };
  
  console.log(data);
  if (!data||loading){
    return null;
  }

  if (data.authorizedUser){
    //setUser(data.authorizedUser);onPressIn={handleLogin}
    return (
      <View>
        <Link to="/login"  onPressIn={handleLogout} component={TouchableWithoutFeedback} >
          <Text style={styles.text}>{'Sign out'}</Text>
        </Link>
      </View>
    );
  } else {
    return(
      <Link to="/login"  component={TouchableWithoutFeedback} >
        <Text style={styles.text}>{'Sign in'}</Text>
      </Link>
    );
  }
};
export default LoginControl;