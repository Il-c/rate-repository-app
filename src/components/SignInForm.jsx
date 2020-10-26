import React from 'react';
import { useHistory } from "react-router-native";
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import Text from './Text';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import * as yup from 'yup';
import useSignIn from '../hooks/useSignIn';

const styles = StyleSheet.create({
  container: {
    flexGrow: 2
  },
  textInput: {
    borderColor: 'gray',
    borderWidth: 2,
    borderRadius: 5,
    padding: 15,
    margin: 15,
    marginBottom: 0
  },
  errorInput: {
    borderColor: 'darkred',
    borderWidth: 2,
    borderRadius: 5,
    padding: 15,
    margin: 15,
    marginBottom: 0
  },
  loginButton: {
    alignItems: 'center',
    borderRadius: 5 ,
    backgroundColor: 'blue',
    color: 'white',
    margin: 15,
  },
  errorText:{
    color: 'red'
  }
});
const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required('Username is required'),
  password: yup
    .string()
    .required('Password is required'),
});

const initialValues = {
  username: '',
  password: '',
};


const SignInForm = () => {
  // eslint-disable-next-line no-unused-vars
  const [signIn, result] = useSignIn();

  let history = useHistory();

  const onSubmit = async (values) => {
    //values = {username:'kalle', password:'password'};
    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });
      console.log(data);
      history.push('/');
    } catch (e) {
      console.log(e);
    }
  };


  return (
    <View style={styles.container}>
      <Formik 
          initialValues={initialValues} 
          onSubmit={onSubmit}
          validationSchema={validationSchema}>
        {({handleSubmit}) => 
          <View >
            <FormikTextInput  style={styles} name={"username"} placeholder={"Enter username"} />
            <FormikTextInput style={styles} secureTextEntry={true}  name="password" placeholder="Enter password" />
            <TouchableWithoutFeedback  onPressIn={handleSubmit}>
              <View style={styles.loginButton}>
                <Text style={styles.loginButton}>Sign in</Text>
              </View>
            </TouchableWithoutFeedback>
          </View> 
        }
      </Formik>
    </View>
  );
};

export default SignInForm;