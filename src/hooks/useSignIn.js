import { useContext } from 'react';
import { useApolloClient } from '@apollo/client';

import { useMutation } from '@apollo/react-hooks';
import { AUTHORIZE } from '../graphql/mutations';

import AuthStorageContext from '../contexts/AuthStorageContext';

const useSignIn = () => {
  const apolloClient = useApolloClient();
  const authStorage = useContext(AuthStorageContext);
  const [mutate, result] = useMutation(AUTHORIZE);

  const signIn = async ({ username, password }) => {
    // call the mutate function here with the right arguments
    console.log('username',username);
    const data = await mutate ({ variables: { username, password } });
    console.log(data.data.authorize.accessToken);
    await authStorage.setAccessToken(data.data.authorize.accessToken);
    apolloClient.resetStore();
    return data;
  };

  return [signIn, result];
};
export default useSignIn;