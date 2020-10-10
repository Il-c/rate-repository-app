import React from 'react';
import { StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import Text from './Text';
import FormikTextInput from './FormikTextInput';
import { Formik } from 'formik';
import theme from '../theme';
import * as yup from 'yup';

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
    backgroundColor: theme.colors.primary,
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

const SignIn = () => {
  return (
    <View style={styles.container}>
      <Formik 
          initialValues={initialValues} 
          onSubmit={console.log('moro')}
          validationSchema={validationSchema}>
        <View>
          <FormikTextInput  style={styles} name={"username"} placeholder={"Enter username"} />
          <FormikTextInput style={styles} secureTextEntry={true}  name="password" placeholder="Enter password" />
          <TouchableWithoutFeedback onPress={console.log('Logged in!')}>
            <View style={styles.loginButton}>
            <Text style={styles.loginButton}>Sign in</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </Formik>
    </View>
  );
};

export default SignIn;