import React, {useState} from 'react';
import {Text, Image, View, TouchableOpacity, StyleSheet} from 'react-native';
import DatePicker from 'react-native-date-picker';

const DatePickerView = ({date, setDate, open, setOpen, onPress}) => {
  return (
    <View style={styles.formFieldView}>
      <Text style={styles.inputFieldName}> Date of Birth</Text>
      <View style={[styles.textInput, styles.datePickerView]}>
        <Text>{date.toISOString()}</Text>
        <TouchableOpacity onPress={onPress}>
          <Image
            style={styles.datePickerIcon}
            source={{
              uri: 'https://static.thenounproject.com/png/3629710-200.png',
            }}
          />
        </TouchableOpacity>
      </View>
      <DatePicker
        modal
        mode="date"
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
          console.log(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </View>
  );
};

export default DatePickerView;

const styles = StyleSheet.create({
  datePickerIcon: {
    width: 20,
    height: 20,
    right: 10,
  },
  datePickerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  formFieldView: {
    paddingTop: 10,
  },
  inputFieldName: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  textInput: {
    height: 30,
    borderColor: '#ebecf0',
    borderWidth: 2,
    marginHorizontal: 20,
    borderRadius: 10,
    paddingLeft: 5,
    top: 5,
  },
});
