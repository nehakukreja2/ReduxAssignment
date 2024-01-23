import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const FormFieldView = ({label, value, onChangeText, placeholder}) => {
  return (
    <View style={styles.formFieldView}>
      <Text style={styles.inputFieldName}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        style={styles.textInput}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default FormFieldView;

const styles = StyleSheet.create({
  textInput: {
    height: 30,
    borderColor: '#ebecf0',
    borderWidth: 2,
    marginHorizontal: 20,
    borderRadius: 10,
    paddingLeft: 5,
    top: 5,
  },
  formFieldView: {
    paddingTop: 10,
  },
  inputFieldName: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
});
