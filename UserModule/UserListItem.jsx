import React, {useState} from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {deleteUser} from './UserSlice';
import {useSelector, useDispatch} from 'react-redux';

const UserListItem = ({item, index, navigation}) => {
  const dispatch = useDispatch();
  const [isOptionsVisible, setOptionsVisible] = useState(false);

  const toggleOptionsMenu = () => {
    setOptionsVisible(!isOptionsVisible);
  };

  const handleEdit = item => {
    console.log('handleEdit');
    toggleOptionsMenu();
    navigation.navigate('UserDetailsForm', {data: item});
  };

  const handleDeleteItem = item => {
    console.log('deleteUser', item);
    toggleOptionsMenu();
    dispatch(deleteUser(item));
  };

  return (
    <View style={styles.containerView}>
      <View style={styles.childView}>
        <View>
          <Text> Name: {item.name} </Text>
          <Text> Email: {item.email} </Text>
          <Text> Phone Number: {item.phoneNumber}</Text>
          <Text> Dob: {item.dateOfBirth.toISOString()} </Text>
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <TouchableOpacity onPress={toggleOptionsMenu}>
            <Image
              style={styles.moreIcon}
              source={{
                uri: 'https://cdn3.iconfinder.com/data/icons/slicons-line-essentials/24/more_vertical-512.png',
              }}
            />
          </TouchableOpacity>
          {isOptionsVisible && (
            <View style={styles.editDeleteButtonView}>
              <TouchableOpacity
                style={styles.editDeleteButton}
                onPress={() => {
                  handleEdit(item);
                }}>
                <Text style={styles.editDeleteButtonText}> Edit</Text>
              </TouchableOpacity>
              <View style={styles.seperatorView} />
              <TouchableOpacity
                style={styles.editDeleteButton}
                onPress={() => {
                  handleDeleteItem(item);
                }}>
                <Text style={styles.editDeleteButtonText}> Delete</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default UserListItem;

const styles = StyleSheet.create({
  containerView: {
    marginHorizontal: 20,
    marginVertical: 10,
  },
  childView: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    borderRadius: 10,
    padding: 5,
  },
  moreIcon: {
    width: 20,
    height: 20,
  },
  editDeleteButtonView: {
    backgroundColor: '#e9ebfe',
    borderRadius: 5,
  },
  editDeleteButton: {
    padding: 4,
  },
  seperatorView: {
    height: 0.5,
    backgroundColor: 'black',
  },
  editDeleteButtonText: {
    fontSize: 11,
  },
});
