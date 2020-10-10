import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({});

const TextInput = ({ style, error, ...props }) => {
  //const textInputStyle = [style];
  
  const textInputStyle = error?style.errorInput:style.textInput;
  
  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;