import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {
  StyleSheet,
  TextInput,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import {addUser, updateUser} from './UserSlice';
import FormFieldView from './FormFieldView';
import DatePickerView from './DatePickerView';

const UserDetailsForm = ({route}) => {
  useEffect(() => {
    if (route?.params?.data) {
      setName(route.params.data.name);
      setEmail(route.params.data.email);
      setDate(route.params.data.dateOfBirth);
      setPhoneNumber(route.params.data.phoneNumber);
    }
  }, [route?.params?.data]);

  console.log('ROUTE', route);
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const onPress = () => {
    setOpen(true);
  };

  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <FormFieldView
        label="Name"
        value={name}
        onChangeText={text => setName(text)}
        placeholder="Enter your Name"
      />
      <FormFieldView
        label="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        placeholder="Enter your Email"
      />
      <FormFieldView
        label="Phone Number"
        value={phoneNumber}
        onChangeText={text => setPhoneNumber(text)}
        placeholder="Enter your Phone number"
      />
      <DatePickerView
        date={date}
        setDate={setDate}
        open={open}
        setOpen={setOpen}
        onPress={onPress}
      />
      <View style={styles.saveButtonView}>
        <TouchableOpacity
          style={styles.saveButton}
          onPress={() => {
            const newUser = {
              name: name,
              email: email,
              phoneNumber: phoneNumber,
              dateOfBirth: date,
            };
            if (!route?.params?.data) {
              console.log(newUser);
              dispatch(addUser(newUser));
            } else {
              console.log('id:', route?.params?.data.userId);
              dispatch(
                updateUser({
                  userId: route?.params?.data.userId,
                  updatedData: newUser,
                }),
              );
            }
          }}>
          <Text style={styles.saveButtonText}> Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserDetailsForm;

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
  saveButton: {
    backgroundColor: 'blue',
    width: '100%',
    height: 35,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveButtonView: {
    paddingTop: 40,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  formFieldView: {
    paddingTop: 10,
  },
  inputFieldName: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
});
